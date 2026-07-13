// ===== HWM AI 人力资源管理系统配置 =====
// 部署到新客户时，只需修改此文件
//
// 新客户三步走：
//   1. 修改本文件中 [公司品牌] 和 [Supabase] 配置
//   2. 注册独立 Supabase 项目，创建对应数据表
//   3. 部署 app.html 到任意静态托管（GitHub Pages / 腾讯云 COS / Nginx）
//
// =============================================

// ===== 公司品牌 =====
window.APP_CONFIG = {
  company: {
    fullName: '南京立顶医疗科技有限公司（演示版）',
    shortName: '立顶医疗',
    brandName: 'Leading Med',
    address: '南京市',
    copyright: '南京立顶医疗科技有限公司',
  },
  
  brand: {
    primary:   '#003472',
    techBlue:  '#1B6EC4',
    accent:    '#0F7BE1',
  },
  
  aiContext: '康达医疗（KDMD）专注于II类/III类医疗器械研发制造，产品涵盖血糖监测系统、胰岛素泵、超声诊断设备、体外诊断试剂等。拥有GMP洁净车间和ISO13485认证，服务全国2000+医疗机构。核心团队：赵建国(总经理)、孙志远(研发)、郑海峰(营销)、周国强(生产)、钱明达(财务)。',
  
  features: {
    kpi:       true,
    mbo:       true,
    employees: true,
    policies:  true,
    system:    true,
    decision:  false,
    talent:    false,
    payroll:   false,
    learning:  false,
    dashboard: false,
    ideas:     false,
    rdpm:      false,
  },
};

// ===== Supabase 数据库配置 =====
// 每个新客户需注册独立 Supabase 项目，替换以下地址和 Key
var SUPABASE_URL = 'https://xgysfujnhwgevmojzkbf.supabase.co';
var SUPABASE_ANON_KEY = 'sb_publishable_dPt0sB5D8ZQ6ZdHt6wuvyA_MkjOeknx';

// Supabase 数据表名（一般不需要改，除非客户有用到多项目共享表的需求）
var SUPABASE_TABLE = 'demo_hwm_employees';
var SUPABASE_WP_TABLE = 'demo_hwm_workplans';
var SUPABASE_USERS_TABLE = 'demo_hwm_users';
var SUPABASE_JD_TABLE = 'demo_hwm_jobdesc';
var SUPABASE_FAV_TABLE = 'demo_hwm_favorites';
