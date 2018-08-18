$(function(){
  /*
   * 1. 进行表单校验配置
   *    校验要求:
   *        (1) 用户名不能为空, 长度为2-6位
   *        (2) 密码不能为空, 长度为6-12位
   * */
  $("#form").bootstrapValidator({
    //设置小图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    // 设置字段
    fields: {
      
      username: {
        //设置校验规则
        validators: {
          // 非空
          notEmpty: {
            message: "用户名不能为空", // 提示信息
          },
          // 长度校验
          stringLength: {
            // 最大最小长度
            min: 2, 
            max: 6,
            message: "用户名长度为 2-6 位" // 提示信息
          }
        }
      },
      password: {
        //设置校验规则
        validators: {
          notEmpty: {
            message: "密码不能为空"
          },
          stringLength: {
            min: 6,
            max: 12,
            message: "密码长度为 6-12 位"
          }
        }

      }
    }
  });




});