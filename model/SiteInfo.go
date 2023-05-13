package model

import (
	"Cafecho/utils/errmsg"
	"gorm.io/gorm"
)

type SiteInfo struct {
	gorm.Model
	SiteName       string `gorm:"column:sitename; type: varchar(200);not null" json:"sitename" label:"网站名称"`
	Slogan         string `gorm:"column:slogan; type: varchar(200);not null" json:"slogan" label:"网站标语"`
	LogoUrl        string `gorm:"column:logourl; type: TEXT" json:"logourl" label:"logo外链"`
	Blogger        string `gorm:"column:blogger; type: varchar(200);not null" json:"blogger" label:"博主名称"`
	ICPNum1        string `gorm:"column:icpnum1; type: varchar(200);" json:"icpnum1" label:"ICP备案号"`
	ICPNum2        string `gorm:"column:icpnum2; type: varchar(200);" json:"icpnum2" label:"公安备案号"`
	FooterSiteyear string `gorm:"column:footer_siteyear; type: varchar(200);" json:"footer_siteyear" label:"建站年份"`
	CardInfoQQ     string `gorm:"column:cardinfo_qq; type: varchar(200);" json:"cardinfo_qq" label:"QQ"`
	CardInfoGITHUB string `gorm:"column:cardinfo_github; type: varchar(200);" json:"cardinfo_github" label:"Github"`
	CardInfoAFDIAN string `gorm:"column:cardinfo_afdian; type: varchar(200);" json:"cardinfo_afdian" label:"爱发电"`
}

// GetSiteInfo 查询网站信息
func GetSiteInfo() []SiteInfo {
	var siteInfo []SiteInfo
	err := db.Select("id,sitename,slogan,logourl,blogger,icpnum1,icpnum2,footer_siteyear,cardinfo_qq,cardinfo_github,cardinfo_afdian").Where("id = 1").Find(&siteInfo).Error
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
	maps["icpnum1"] = data.ICPNum1
	maps["icpnum2"] = data.ICPNum2
	maps["footer_siteyear"] = data.FooterSiteyear
	maps["cardinfo_qq"] = data.CardInfoQQ
	maps["cardinfo_github"] = data.CardInfoGITHUB
	maps["cardinfo_afdian"] = data.CardInfoAFDIAN
	err = db.Model(&siteInfo).Where("id = 1").Updates(maps).Error
	if err != nil {
		return errmsg.ERROR
	}
	return errmsg.SUCCESS
}
