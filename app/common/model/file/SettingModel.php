<?php
// +----------------------------------------------------------------------
// | yylAdmin 前后分离，简单轻量，免费开源，开箱即用，极简后台管理系统
// +----------------------------------------------------------------------
// | Copyright https://gitee.com/skyselang All rights reserved
// +----------------------------------------------------------------------
// | Gitee: https://gitee.com/skyselang/yylAdmin
// +----------------------------------------------------------------------

// 文件设置模型
namespace app\common\model\file;

use think\Model;
use hg\apidoc\annotation\Field;
use hg\apidoc\annotation\AddField;

class SettingModel extends Model
{
    protected $name = 'file_setting';

    /**
     * 信息
     */
    public function info()
    {
    }

    /**
     * 修改
     */
    public function edit()
    {
    }
}