package model

import (
	"Cafecho/utils/errmsg"
	"gorm.io/gorm"
)

type SiteInfo struct {
	gorm.Model
	SiteName string `gorm:"column:sitename; type: varchar(200);not null" json:"sitename" label:"网站名称"`
	Slogan   string `gorm:"column:slogan; type: varchar(200);not null" json:"slogan" label:"网站标语"`
	LogoUrl  string `gorm:"column:logourl; type: TEXT" json:"logourl" label:"logo外链"`
	Blogger  string `gorm:"column:blogger; type: varchar(200);not null" json:"blogger" label:"博主名称"`
}

// GetSiteInfo 查询网站信息
func GetSiteInfo() []SiteInfo {
	var siteInfo []SiteInfo
	err := db.Select("id,sitename,slogan,logourl,blogger").Where("id = 1").Find(&siteInfo).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil
	}
	return siteInfo
}

// EditSiteInfo 编辑网站信息
func EditSiteInfo(data *SiteInfo) (code int) {
	var siteInfo SiteInfo
	var maps = make(map[string]interface{})
	maps["sitename"] = data.SiteName
	maps["slogan"] = data.Slogan
	maps["logourl"] = data.LogoUrl
	maps["blogger"] = data.Blogger
	err = db.Model(&siteInfo).Where("id = 1").Updates(maps).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}
