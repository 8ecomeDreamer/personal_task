import * as compnt from "../../../../public/js/compnt.js";
import * as unicom from "../../../../public/js/unicom.js";

import "../scss/order.scss";
var alichannel = getUrlParam("alichannel");
register()

function register() {
    if (alichannel == null || alichannel == '') {
        console.log('未获取到alichannel参数！');
    } else {
        console.log('参数获取成功！')
    }
}

function getUrlParam(urlprm) {
    var reg = new RegExp("(^|&)" + urlprm + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return r[2];
    }
}
$(function() {
    var isPageHide = false;
    window.addEventListener('pageshow', function() {
        if (isPageHide) {
            window.location.reload();
        }
    });
    window.addEventListener('pagehide', function() {
        isPageHide = true;
    });

    if (window.location.href.indexOf('draw.html') >= 0) {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user != null) {
            $('.usermob').val(user.usermob);
        }
    }
})

init();

function init() {
    var message = localStorage.getItem('message');
    if (message != null && message != '') {
        compnt.showAlert(message);
        localStorage.removeItem('message');
    }

    compnt.showLoading();
    console.log(1)
    unicom.init().then(function(response) {
        compnt.hideLoading();
        console.log(response.product)
        if (response.product[0].productid == "2021073001") {
            unicom.product = response.product[1]
        } else {
            unicom.product = response.product[0];
        }


        unicom.fesname = response.festival;

        unicom.loadUserInfo();

        if (location.href.indexOf("15/index") >= 0) {
            showOrderPage();
        } else {
            openPage();
        }

        if (location.href.indexOf('/channel') >= 0) {
            unicom.burypointLogId('110002'); // 退订页面pv, pv去重得到uv
            WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'open', ea: 'cancel_open' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
        } else if (location.href.indexOf('/draw') >= 0) {
            unicom.burypointLogId('110003'); // 领取页面pv, pv去重得到uv
            WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'open', ea: 'draw_open' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
        } else if (location.href.indexOf('/flow') >= 0) {
            unicom.burypointLogId('110004'); // 流量查询pv, pv去重得到uv
            WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'open', ea: 'flow_open' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
        } else if (location.href.indexOf('/active') >= 0) {
            unicom.burypointLogId('110005'); // 激活页面pv, pv去重得到uv
            WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'open', ea: 'active_open' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
        } else if (location.href.indexOf('/refund') >= 0) {
            unicom.burypointLogId('110006'); // 退款
        } else if (location.href.indexOf('/channel') >= 0) {
            unicom.burypointLogId('110002'); // 退订页面pv, pv去重得到uv
            WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'open', ea: 'cancel_open' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
        } else {
            unicom.burypointLogId('110001'); // 订购页面pv, pv去重得到uv
            WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'open', ea: 'order_open' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
        }
    })
}

function openPage(pageName) {
    if (pageName == null) {
        if (location.href.indexOf("index.html") >= 0) pageName = "order";

        if (location.href.indexOf("channel20220704.html") >= 0) pageName = "cancel";

        if (location.href.indexOf("channel.html") >= 0) pageName = "cancel";

        if (location.href.indexOf("draw.html") >= 0) pageName = "draw";

        if (location.href.indexOf("active.html") >= 0) pageName = "active";

        if (location.href.indexOf("flow.html") >= 0) pageName = "flow";
    }

    switch (pageName) {
        case "active":
            showActivePage();
            break;
        case "cancel":
            showCancelPage();
            break;
        case "draw":
            showDrawPage();
            break;
        case "flow":
            showFlowPage();
            break;
        default:
            showOrderPage();
            break;
    }
}


$('#btn-cancel').unbind('click').on('click', function() {
    showCancelPage();
})

$('#btn-active').unbind('click').on('click', function() {
    showActivePage();
})

$('#gotoDrawPage').unbind('click').on('click', function() {
    showDrawPage(window.location.href.substring(window.location.href.lastIndexOf('/') + 1, window.location.href.lastIndexOf('.')))
})

function showDrawPage(back) {
    if (location.href.indexOf("draw.html") < 0) {
        window.location.href = "draw.html?fes=" + unicom.query.fes + "&sou=" + unicom.query.sou + '&back=' + (back == null ? '' : back);
        return;
    }

    var $container = $('.section-login').find('.form-group');

    $container.find('.sendcode').unbind('click').on('click', function() {
        var account = $container.find('.account').val();
        var arr = new Array()
        arr = account.split(' ')
        if (arr.length != 1) {
            compnt.showAlert('抖音短视频账号不能含有空格');
            return
        }
        if (account == null || account == "") {
            compnt.showAlert('请输入抖音短视频账号');
            return;
        }
        unicom.sendSms($container, 'drawlogin');
        WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'draw_click_send_sms_code_btn' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
    })

    $container.find('.login').unbind('click').on('click', function() {
        var usermob = $container.find('.usermob').val();
        var account = $container.find('.account').val();
        var smscode = $container.find('.smscode').val();
        if (usermob == null || usermob == "") {
            compnt.showAlert('请输入联通手机号');
            return;
        }
        var arr = new Array()
        arr = account.split(' ')
        if (arr.length != 1) {
            compnt.showAlert('抖音短视频账号不能含有空格');
            return
        }
        if (account == null || account == "") {
            compnt.showAlert('请输入抖音短视频账号');
            return;
        }

        if (account == null || account == "") {
            compnt.showAlert('请输入抖音短视频账号');
            return;
        }
        if (smscode == null || smscode == "") {
            compnt.showAlert('请输入验证码');
            return;
        }

        var $comfirm = showConfirmDialog(account);
        $comfirm.find('.cancel').on('click', function() {
            compnt.hideLoading();
        });

        $comfirm.find('.okay').on('click', function() {
            unicom.checkCode($container, true).done(function() {
                /*unicom.canDrawCoin(account).then(function (response) {
                    if (response.resultCode != "0000") {
                        compnt.hideLoading();
                        compnt.showAlert(response.errorInfo);
                        return;
                    }
    
                    drawCoin(account)
                })*/
                drawCoin(account);
            }).fail(function(data) {
                compnt.hideLoading();
            })

            WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'draw_click_confirm_btn' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
        });
    })
}

function drawCoin(account) {
    // var $comfirm = showConfirmDialog(account);
    // $comfirm.find('.cancel').on('click', function() {
    //    compnt.hideLoading();
    // });

    //$comfirm.find('.okay').on('click', function() {
    //    var $container = $('.section-login').find('.form-group');
    //    $container.find('.usermob').val('')
    //    $container.find('.usermob').val('')
    //    $container.find('.account').val('');
    compnt.showLoading();
    unicom.drawCoin(account, '').done(function(response) {
        compnt.hideLoading();

        switch (response.resultCode) {
            case "0000":
                var $container = $('.section-login').find('.form-group');
                $container.find('.usermob').val('');
                $container.find('.smscode').val('');
                $container.find('.account').val('');

                compnt.showAlert('抖币充值中，详情结果以短信形式告知').then(function() {
                    if (unicom.query.back != null && unicom.query.back != '') {
                        showOrderPage(unicom.query.back + ".html");
                    }
                });
                WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'draw_success' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })

                break;
            case "7605":
                compnt.showAlert(response.errorInfo);
                WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'draw_failure' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })

                break;
            case '6776':
                var prefix = '';
                compnt.showAlert(prefix + response.errorInfo);
                WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'draw_failure' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })

                break;
            default:
                var prefix = '';
                if (response.errorInfo.indexOf('领取失败') < 0) {
                    prefix = '领取失败，';
                }
                compnt.showAlert(prefix + response.errorInfo);
                WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'draw_failure' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })

                break;
        }
    }).fail(function(data) {
        compnt.hideLoading();
    })
}

function showOrderPage(backPage) {
    // if (location.href.indexOf('30/index') < 0) {
    //     if (backPage == null || backPage == '') {
    //         backPage = 'index.html';
    //     }

    //     window.location.href = backPage + "?fes=" + unicom.query.fes + "&sou=" + unicom.query.sou;
    //     return;
    // }
    // var yesar = '1';
    // $('#nodex').unbind('click').on('click', function(event) {
    //     //compnt.showAlert('退订成功');
    //     var yuans = document.querySelector('.yuans')
    //     if (yuans.style.background == '') {
    //         yesar = '2'
    //         console.log(yesar)
    //         yuans.style.background = "#0064ff"
    //         yuans.style.backgroundSize = "100% 104% "
    //         yuans.style.border = "solid 0.04rem #ffff"
    //         yuans.style.width = "0.18rem"
    //         yuans.style.height = "0.18rem"
    //     } else {
    //         yesar = '1'
    //         console.log(yesar)
    //         yuans.style.background = ""
    //         yuans.style.border = "solid 0.02rem #ffff"
    //         yuans.style.width = "0.22rem"
    //         yuans.style.height = "0.22rem"
    //     }
    // })
    $('#btn-order').unbind('click').on('click', function(event) {
        //compnt.showAlert('退订成功');


        if (!compnt.lockClick()) {
            return;
        }

        unicom.showCapPage(null, null, false, false, true).then(function(data) {
            compnt.unlockClick();

            order(data.userid, data.token, data.usermob, null || unicom.query.ringid, alichannel);
        }).fail(function(response) {
            compnt.unlockClick();
        })

        WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'order_click_order_btn' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })

    })
    $('#tuid_channel').unbind('click').on('click', function(event) {
        unicom.showCancelReasonPages().done(function(cancelReason) {
            var k = JSON.stringify(cancelReason)
            if (alichannel == undefined) {
                var h = JSON.stringify('a')
                console.log(h)
                window.localStorage.setItem('kye', k)
                window.localStorage.setItem('kyes', h)
                gotoUrl('douyin/al/channel')
            } else {
                var h = JSON.stringify(alichannel)
                window.localStorage.setItem('kye', k)
                window.localStorage.setItem('kyes', h)
                gotoUrl('douyin/al/channel')
            }
        }).fail(function() {

        });
        // //compnt.showAlert('退订成功');
        // window.location.href = "channel20220704.html?fes=" +
        //     unicom.query.fes + "&sou=" + unicom.query.sou
        // return;
    })
}

function showFlowPage() {
    if (location.href.indexOf("flow.html") < 0) {
        window.location.href = "flow.html?fes=" +
            unicom.query.fes + "&sou=" + unicom.query.sou +
            "&userid=" + unicom.user.userid + "&usermob=" + unicom.user.usermob +
            "&usertime=" + (unicom.user.usertime || (new Date().getTime()));
        return;
    }

    var $container = $('.section-flow');
    var usermob = unicom.user.usermob;
    $container.find('.phone').html(usermob.substring(0, 3) + 'xxxx' + usermob.substring(7, 11));

    $container.find('.btn').unbind('click').on('click', function() {
        //if (!compnt.lockClick()) {
        //    return;
        //}

        queryFlow().then(function(message) {
            compnt.unlockClick()

            if (message != null && message != "") {
                compnt.showAlert(message);
            }
        }).fail(function() {
            compnt.unlockClick();
        });
    })

    queryFlow();
}

function showActivePage() {
    if (location.href.indexOf("active.html") < 0) {
        window.location.href = "active.html?fes=" + unicom.query.fes + "&sou=" +
            unicom.query.sou;

        return;
    }

    var $container = $('.section-login').find('.form-group');

    $container.find('.sendcode').unbind('click').on('click', function() {
        if (!checkEquip()) return;

        unicom.sendSms($container, 'activelogin');
    })

    $container.find('.login').unbind('click').on('click', function(event) {
        if (!checkEquip()) return;

        if (!compnt.lockClick()) {
            return;
        }

        unicom.checkCode($container).then(function() {
            compnt.unlockClick()

            active()
        }).fail(function() {
            compnt.unlockClick();
        });
    })

    window.scrollTo(0, 0)
}

function showCancelPage() {
    // if (location.href.indexOf("cannel20220313.html") < 0) {
    //     window.location.href = "cannel20220313.html?fes=" + unicom.query.fes + "&sou=" + unicom.query.sou;
    //     return;
    // }
    var cancelReason = JSON.parse(window.localStorage.getItem('kye'))
    if (JSON.parse(window.localStorage.getItem('kyes')) != 'a') {
        var alichannels = JSON.parse(window.localStorage.getItem('kyes'))
    } else {
        var alichannels = null
    }
    var $container = $('.section-login').find('.form-group');

    $container.find('.sendcode').unbind('click').on('click', function() {
        unicom.sendSms($container, 'cancellogin');
        WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'cancel_click_send_sms_code_btn' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
    })

    $container.find('.login').unbind('click').on('click', function() {
        compnt.showLoading();
        console.log(alichannels)
        unicom.checkCode($container).done(function() {
            unicom.alcancel(null, null, cancelReason.canceltype, cancelReason.cancelmsg, alichannels).done(function(response) {
                compnt.hideLoading();
                switch (response.resultCode) {
                    case "0000":
                        compnt.showAlert('退订成功'); //.then(function(message) {
                        //showFlowPage();
                        //});
                        window.localStorage.removeItem("kye");
                        WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'cancel_success' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })

                        break;
                    case "7605": //应该是已经退订了吧，因此不需要在重复退订啦
                        compnt.showAlert(response.errorInfo); //.then(function(message) {
                        //showFlowPage();
                        //});
                        WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'cancel_failure' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })

                        break;

                    default:
                        var prefix = '';
                        if (response.errorInfo.indexOf('退订失败') < 0) {
                            prefix = '退订失败，';
                        }
                        compnt.showAlert(prefix + response.errorInfo);
                        WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'cancel_failure' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })

                        break;
                }
            }).fail(function(data) {
                compnt.hideLoading();
            })
        }).fail(function(data) {
            compnt.hideLoading();
        })

        WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'cancel_click_confirm_btn' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
    })

    window.scrollTo(0, 0)
}



function checkEquip() {
    /*if (!baidu.app.baidu) {
        compnt.showAlert('请到百度产品客户端中激活免流～')
        return false;
    }
    if (!baidu.checkWeiboVersion()) {
        compnt.showAlert('请到升级到最新版百度产品客户端后激活免流～')
        return false;
    }*/
    return true;
}

/**
 * 订购
 */
function order(userid, token, usermob, ringid, alichannel) {
    compnt.showLoading('处理中，请稍后...');
    unicom.alorder(userid, token, usermob, ringid, alichannel).done(function(response) {
        compnt.hideLoading();
        switch (response.resultCode) {
            case "0000": //订购成功！跳转到领取会员页面
                unicom.saveUserInfo();
                if (response.syncstatus == '0') {
                    compnt.showAlert('业务开通中，结果请以短信提示为准。');
                } else {
                    compnt.showAlert('订购成功！');
                }
                WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'order_success' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
                return;
            case "0013":
                //showAlertDialog('orderFailure','该号码归属省分2/3G暂未开通此产品！');
                compnt.showAlert('该号码归属省分2/3G暂未开通此产品！');
                WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'order_failure' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
                break;
            case "6611":
                // showAlertDialog('orderFailure','错误代码（6611），' + '订购失败，请重试！');
                compnt.showAlert('错误代码（6611），订购失败，请重试！');
                WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'order_failure' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
                break;
            case "6615":
                //showAlertDialog('orderFailure', '订购失败，请确定用户套餐！');
                compnt.showAlert('订购失败，请确定用户套餐！');
                WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'order_failure' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
                break;
            case "6622": // 用户已订购过此产品！跳转到流量查页面
                // localStorage.setItem('message', '您已经订购了本产品~');
                compnt.showAlert('您已经订购了本产品~');
                unicom.saveUserInfo();
                WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'order_failure' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
                    // showFlowPage();
                break;
            default:
                //showAlertDialog('orderFailure', response.errorInfo + '，订购失败，请确定用户套餐！');
                compnt.showAlert('网络异常，请稍后再试！');
                WoAnalytics.addPoint({ ad: $('#nanyanad').val(), ett: 'click', ea: 'order_failure' + $('#nanyanlabel').val(), ct: 'web', pm: parseInt(unicom.query.sou, 32) })
                break;
        }
    }).fail(function(error) {
        compnt.hideLoading();
        console.log(error);
    });
}

function showAlertDialog(action, message) {

    var className = '';
    switch (action) {
        case 'orderSuccess':
            className = 'dialog-message-order-success';
            break;
        case 'orderFailure':
            className = 'dialog-message-order-failure';
            break;
        case 'activeSuccess':
            className = 'dialog-message-active-success';
            break;
        case 'activeFailure':
            className = 'dialog-message-active-failure';
            break;
        case 'cancelSuccess':
            className = 'dialog-message-cancel-success';
            break;
        case 'cancelFailure':
            className = 'dialog-message-cancel-failure';
            break;
        default:

            break;
    }

    var $overlay = $('<div class="overlay"></div>');
    var $dialog = $(
        '<div class="dialog dialog-message ' + className + '">' +
        '    <div class="title"></div>' +
        '    <div class="content">' + message + '</div>' +
        '    <div class="actions">' +
        '        <div class="btn">确定</div>' +
        '    </div>' +
        '</div>');

    $overlay.appendTo($(document.body))
    $dialog.appendTo($(document.body))

    $dialog.find('.btn').unbind('click').on('click', function() {
        $dialog.close()
    })

    $dialog.close = function() {
        $overlay.remove();
        $dialog.remove();
        $dialog = null;
    }

    return $dialog;
}

/**
 * 查询用户剩余流量
 */
function queryFlow() {
    var $container = $('.section-flow');

    //return new Promise(function(resolve, reject) {
    var def = $.Deferred();
    unicom.queryFlow().then(function(response) {
        // var response = JSON.parse(responseText);

        // console.log("流量剩余情况：" + response.data)
        switch (response.resultCode) {
            case "0000":
                //compnt.showAlert(JSON.stringify(response.data));
                //console.log(response.data)
                //console.log(JSON.parse(response.data).surplusFlow)
                var surplus = compnt.returnFloat(JSON.parse(response.data).surplusFlow / 1024 / 1024);
                $container.find('.surplus').html(surplus + 'GB');

                var usedFlowKb = parseInt(JSON.parse(response.data).usedFlow);
                if (usedFlowKb > 0 && usedFlowKb < 1024) {
                    def.resolve("剩余流量更新成功，为您免流了" + usedFlowKb + "KB～");
                } else if (usedFlowKb > 1024) {
                    var useedFlow = compnt.returnFloat(usedFlowKb / 1024);
                    def.resolve("剩余流量更新成功，为您免流了" + useedFlow + "MB～");
                } else {
                    def.resolve("剩余流量更新成功～");
                }

                break;
            case "9201": //{"resultCode":"9201","errorInfo":"查询失败，请检查是否有订购关系!"}
                def.resolve("您未订购百度定向流量包～")
                $container.find('.phone').html('用户未订购此产品！');
                break;
            case "9203": //{"resultCode":"9203","errorInfo":"流量查询失败，没有获取到用户所使用流量信息!"}
                //compnt.showAlert("没有获取到用户所使用流量信息!");
                def.resolve("剩余流量更新成功～")
                $container.find('.suplus').html('本月剩余<br>8.00GB');
                break;
            default:
                def.resolve("剩余流量更新成功～")
                break;
        }
    })

    return def;
    //})
}

function active() {
    baidu.active().then(function() {
        //checkActiveResult();
        compnt.showAlert('激活成功').then(function() {
            unicom.saveUserInfo()
                // showFlowPage();
        });
    })
}

$('.section-agr').find('.footer').on('click', function() {
    if ($($('.section-agr .scope').find('li')[2]).hasClass('hidden')) {
        $('.section-agr .scope').find('li').each(function(i, ele) {
            $(ele).removeClass('hidden');
        })
        $('.section-agr').find('.footer').html('隐藏<span class="arrow">&gt;');
    } else {
        $('.section-agr .scope').find('li').each(function(i, ele) {
            if (i >= 1) {
                $(ele).addClass('hidden');
            }
        })
        $('.section-agr').find('.footer').html('查看更多专属流量适用范围<span class="arrow">&gt;');
    }
});

function showConfirmDialog(account) {
    var $overlay = $('<div class="overlay"></div>')
    var $dialog = $(
        '<div class="dialog dialog-confirm">' +
        '    <div class="content">请确认是否领取抖音币到' + account + '账号？</div>' +
        '    <div class="actions">' +
        '        <div class="btn cancel">取消</div>' +
        '        <div class="btn okay">确认</div>' +
        '    </div>' +
        '</div>');

    $overlay.appendTo($(document.body))
    $dialog.appendTo($(document.body))

    $dialog.find('.btn').on('click', function() {
        $overlay.remove();
        $dialog.remove();
        $dialog = null;
    })

    $dialog.close = function() {
        $overlay.remove();
        $dialog.remove();
        $dialog = null;
    }
    return $dialog;
}