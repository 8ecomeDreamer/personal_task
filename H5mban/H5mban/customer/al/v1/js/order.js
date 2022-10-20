var users = {};
//1.循环遍历users数据
var timestamp = new Date()
console.log(timestamp)
var userid = getQueryString("userid");
var fes = getQueryString("fes");
var sou = getQueryString("sou");
var usermob = getQueryString("usermob")
var root = null;

/*
获取订购记录
*/

root = getRootPath();
queryWeiboUserInfoak(userid, usermob);

function queryWeiboUserInfoak(userid, usermob) {
    // var productid = 2020010201
    var param = {
        "fes": fes,
        "sou": sou,
        "fog": "df3958be828815ec18613612fa1e7a55ae169921b908aa72790b5b2b6d2e9d07d7633bc104c8ce39a475d3ff8b912c930f59bfc2c8bb72d2aab77466e5d474ae96fc27315c3acadc14fc323e8924f80ff66876943debf037d702e0b840138c3b",
        "userid": userid,
        "usermob": usermob
    }
    var def = $.Deferred();
    $.ajax({
        url: root + '/comm/queryorder',
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(param)
    }).then(function(response) {
        var arr = response
        console.log(arr)
        var json = [];
        json.push(JSON.parse(arr.data))
        var more = ''
        json.forEach(function(item) {
            console.log(item)
            more += `  <div class="body-as">
                            <div class="ge-box">
                                <div class="box-ace">
                                    <img class="img-ace" src="./20220704/images/抖音币.png" alt="">
                                    <span class="text-ace">抖音定向流量包30元20GB</span>
                                </div>
                             <span class="text-b">订购时间</span><span class="text-f">${item.ordertime}</span>
                             <span class="text-c">失效时间</span><span class="text-g">${a + ' 24:00:00'}</span>

                    </div>
                </div>
          `
        })
        $('#bodyt').append(more)
        switch (response.resultCode) {
            case "0000":
                def.resolve(response);
                break;
            case "1066":
                def.resolve(response);
                break;
            default:
                compnt.showAlert(response.errorInfo)
                def.reject(response);
                break;
        }
    })

    function getLastDay() {
        var y = new Date().getFullYear(); //获取年份
        var m = new Date().getMonth() + 1; //获取月份
        var d = new Date(y, m, 0).getDate(); //获取当月最后一日
        m = m < 10 ? '0' + m : m; //月份补 0
        d = d < 10 ? '0' + d : d; //日数补 0

        return [y, m, d].join("-")
    }

    var a = getLastDay()
    console.log(a + ' 24: 00: 00')

    // var param = {
    //     "fog": 'df3958be828815ec18613612fa1e7a55e6077a33cfc0098b64a25eeabaa4e118976fdec7a362c595035df466add330085bd685bd54bf9abc229f4b59abe09f1618473ede33aa3665bd2c88a2ad1bc7cc690066e6a331a0cc078fd38b86681cbab250b233fcb92ba4b318f90df696b5ae',
    //     'userid': usermob,
    //     'vipcode': '10001'
    // }

    // var def = $.Deferred();

    // $.ajax({
    //     url: root + "/rights/querys",
    //     type: "POST",
    //     contentType: "application/json",
    //     data: JSON.stringify(param)

    // }).then(function(response) {
    //     // console.log(response)
    //     var more = ''
    //     response.data.forEach(function(item) {
    //         if (item.status == "3") {
    //             more += `  <div class="body-as">
    //             <div class="ge-box">
    //                 <div class="box-ace">
    //                     <img class="img-ace" src="./20220704/images/抖音币.png" alt="">
    //                     <span class="text-ace">${item.productName}</span>
    //                 </div>
    //                 <span class="text-a">领取权益</span><span id='${item.spid}' productid='${item.productid}' class="text-ak">立即领取</span>
    //             </div>
    //         </div>
    //   `

    //         }
    //         // console.log(response.data)
    //         switch (item.vipname) {
    //             case '爱奇艺视频会员周卡':
    //                 var img = '202203/images/爱奇艺.png'
    //                 break;
    //             case '美团外卖红包5元':
    //                 var img = '202203/images/美团.png'
    //                 break;
    //             case '抖音币50个':
    //                 var img = '202203/images/抖音币.png'
    //                 break;
    //             case '优酷视频会员周卡':
    //                 var img = '202203/images/优酷.png'
    //                 break;
    //             case '腾讯视频会员周卡':
    //                 var img = '202203/images/腾讯视频.png'
    //                 break;
    //             case '芒果TV PC移动影视会员周卡':
    //                 var img = '202203/images/芒果tv.png'
    //                 break;
    //             case '蜻蜓FM超级会员周卡':
    //                 var img = '202203/images/蜻蜓.png'
    //                 break;
    //             default:
    //                 break;
    //         }
    //         if (item.vipuser != null) {
    //             more += `

    //             <div class="body-a">
    //             <div class="ge-box">
    //                 <div class="box-ace">
    //                     <img class="img-ace" src="${img}" alt="">
    //                     <span class="text-ace">${item.productName}</span>
    //                 </div>
    //                 <!-- <span class="text-a">所属产品</span><span class="text-e">抖音定向流量权益包</span> -->
    //                 <span class="text-a">领取权益</span><span class="text-e">${item.vipname}</span>
    //                 <span class="text-b">领取号码</span><span class="text-f">${item.vipuser}</span>
    //                 <span class="text-c">领取时间</span><span class="text-g">${item.ordertime}</span>

    //             </div>
    //         </div>
    //                     `
    //         }

    //     })
    //     $('#bodyt').append(more)
    //     switch (response.resultCode) {
    //         case "0000":
    //             def.resolve(response);
    //             break;
    //         case "1066":
    //             def.resolve(response);
    //             break;
    //         default:
    //             compnt.showAlert(response.errorInfo)
    //             def.reject(response);
    //             break;
    //     }
    //     $('.text-ak').click(function() {
    //         var d1 = new Date(timestamp); //已知时间戳
    //         var d2 = new Date(); //当前时间戳
    //         let minute = (parseInt(d2 - d1) / 1000 / 60) //算出相差的分钟
    //         console.log(d2)
    //         console.log(minute)
    //         if (minute < 10) {
    //             var spid = $(this).attr("id")
    //             var productid = $(this).attr("productid");
    //             var a = getQueryString("cpid");
    //             var b = getQueryString("userid");
    //             var c = getQueryString("usermob");
    //             var fes = getQueryString("fes");
    //             var sou = getQueryString("sou");
    //             var cbUrls;
    //             if (window.location.href.indexOf("https://800.wo.cn/orderchannel") >= 0) {
    //                 cbUrls = "https://800.wo.cn/orderchannel/douyin/15/draw20220313.html?fes=jjd&sou=1m&cpid=" + a + '&userid=' + b + '&usermob=' + c + '&spid=' + spid + '&productid=' + productid;
    //             } else if (window.location.href.indexOf("http://100.0.4.69:3344") >= 0) {
    //                 cbUrls = "http://100.0.4.69:3344/orderchannel/douyin/15/draw20220313.html?fes=" + fes + "&sou=" + sou + '&cpid=' + a + '&userid=' + b + '&usermob=' + c + '&spid=' + spid + '&productid=' + productid;
    //             }
    //             location.href = cbUrls
    //         } else {
    //             var spid = $(this).attr("id")
    //             var productid = $(this).attr("productid");
    //             var cbUrl = 'https://800.wo.cn/orderchannel/douyin/15/draw20220313.html?fes=jjd&sou=1m&spid=' + spid + '&productid=' + productid;
    //             // var cbUrl = 'https://800.wo.cn/orderchannel/douyin/15/draw20220313.html?' + 'fes=' + fes + '&sou=' + sou;
    //             if (cbUrl.indexOf('cpid=') > 0) {
    //                 cbUrl = cbUrl.substr(0, cbUrl.indexOf('cpid=') - 1)
    //             }
    //             if (window.location.href.indexOf('?') >= 0) {
    //                 cbUrl += '&cpid=2017060800064876';
    //             } else {
    //                 cbUrl += '?cpid=2017060800064876';
    //             }
    //             // 调用南研一键取号页面
    //             window.location.href = 'https://account.bol.wo.cn/cuuser/unity/redirectOnekeyLogin?clientId=directflow&redirectUrl=' + encodeURIComponent(encodeURIComponent(cbUrl))
    //         }


    //     });
    // }).fail(function(error) {
    //     def.reject('服务调用异常')
    // })

    // return def;
};




/*
 获取root
*/
function getRootPath() {
    //获取当前网址，如： http://localhost:8080/ems/Pages/Basic/Person.jsp
    var curWwwPath = window.document.location.href;
    //获取主机地址之后的目录，如： /ems/Pages/Basic/Person.jsp
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8080
    var localhostPath = curWwwPath.substring(0, pos);
    //获取带"/"的项目名，如：/ems
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);

    root = (localhostPath + projectName);

    return (localhostPath + projectName);
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}