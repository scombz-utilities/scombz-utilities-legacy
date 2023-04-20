/* ScombZ Utilities */
/* fakePage.js */
//偽課題提出ページ


/**
 * 1. 偽科目ページを作成
 * 2. 偽提出ページを作成
 * 3. 削除する
 * 4. 自動入力
 */

/**
 * URLはランダム生成
 * だからこそ何を提出したか判別がつく
 *  submission?idnumber=2023 +科目ID+ 1001&reportId=8桁乱数XX
 */

function fakePage() {
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/report/submission") 
    ){
        alert(location.href);
        document.body = HTML_REPORT_BODY;
        alert("あああ");
    }

    function randInt(min, max) {
        return Math.random() * (max - min) + min;
    }

    function submission(){

    }
    HTML_REPORT_BODY = `
    <body class="vsc-initialized">
	<div id="contentsWrapper" class="sidemenu-hide clearfix">

		<!--サイドメニュー-->
		<div id="sidemenu" class="sidemenu sidemenu-close" style="transition: none 0s ease 0s;">
		<div class="sidemenu-head">
			<div class="sidemenu-logo">
				<a href="/portal/home"><img src="/sitelogo" alt="in Campus"></a>
			</div>
			<div id="sidemenuClose" class="sidemenu-close-icon hamburger-icon"><div class="hamburger-line"></div>
<div class="hamburger-line"></div>
<div class="hamburger-line"></div></div>
		</div>

		
		
			<a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt portal-color sidemenu-icon portal-home-icon" href="/portal/home">ポータルホーム</a>
		
		
			<a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt lms-color sidemenu-icon lms-icon" href="/lms/timetable">LMS</a>
			
				<a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt lms-color sidemenu-icon online-icon" href="/lms/online">オンライン授業情報</a>
			
			<a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt task-color sidemenu-icon task-icon" href="/lms/task">課題・テスト一覧</a>
			<a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt course-search-color sidemenu-icon search-icon" href="/course/search">科目検索</a>
		
		<a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt community-search-color sidemenu-icon search-icon" href="/community/search">コミュニティ</a>
        <br>
        <a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt info-color sidemenu-icon info-icon " href="https://scombz.shibaura-it.ac.jp/portal/home/information/list" style="height: 50px;border-top: 1px solid #CCC;">お知らせ</a>
        <a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt questionnaire-color sidemenu-icon questionnaire-icon" href="https://scombz.shibaura-it.ac.jp/portal/surveys/list" style="height: 50px;">アンケート</a>
        
		<br>
		
		<br>

		
			
				
				
				
				
				
				
				
				
				
				
					<div>

	
	<!-- content -->
	<div id="sidemenuPullEdit" class="sidemenu-pull sidemenu-lms-pull">科目コンテンツ</div>
	<div id="sidemenuListEdit">
		<ul class="sidemenu-list">
			<li class="sidemenu-list-area">
				<a class="sidemenu-list-colomn sidemenu-list-txt pulldown-close" href="javascript:void(0);" data1="202303SU0116851001" onclick="sidemenuLinkMaker(this.getAttribute('data1'), this.getAttribute('data2'), 'report');">課題</a>
			</li>
			<li class="sidemenu-list-area">
				<a class="sidemenu-list-colomn sidemenu-list-txt pulldown-close" href="javascript:void(0);" data1="202303SU0116851001" onclick="sidemenuLinkMaker(this.getAttribute('data1'), this.getAttribute('data2'), 'courseContent');">教材</a>
			</li>
			<li class="sidemenu-list-area">
				<a class="sidemenu-list-colomn sidemenu-list-txt pulldown-close" href="javascript:void(0);" data1="202303SU0116851001" onclick="sidemenuLinkMaker(this.getAttribute('data1'), this.getAttribute('data2'), 'examination');">テスト</a>
			</li>
			<li class="sidemenu-list-area">
				<a class="sidemenu-list-colomn sidemenu-list-txt pulldown-close" href="javascript:void(0);" data1="202303SU0116851001" onclick="sidemenuLinkMaker(this.getAttribute('data1'), this.getAttribute('data2'), 'questionnaire');">アンケート</a>
			</li>
			<li class="sidemenu-list-area">
				<a class="sidemenu-list-colomn sidemenu-list-txt pulldown-close" href="javascript:void(0);" data1="202303SU0116851001" onclick="sidemenuLinkMaker(this.getAttribute('data1'), this.getAttribute('data2'), 'discussion');">ディスカッション</a>
			</li>
			<li class="sidemenu-list-area">
				<a class="sidemenu-list-colomn sidemenu-list-txt pulldown-close" href="javascript:void(0);" data1="202303SU0116851001" onclick="sidemenuLinkMaker(this.getAttribute('data1'), this.getAttribute('data2'), 'ltiOutsideToolView');">外部ツール</a>
			</li>
			<li class="sidemenu-list-area">
				<a class="sidemenu-list-colomn sidemenu-list-txt pulldown-close" href="javascript:void(0);" data1="202303SU0116851001" onclick="sidemenuLinkMaker(this.getAttribute('data1'), this.getAttribute('data2'), 'attendance');">出席</a>
			</li>
		</ul>
	</div>
</div>
				
				
				
			
		
		
	</div>

		<!--右カラム-->
		<div id="pageMain" class="page-main sidemenu-hide">

			<!--ヘッダ-->
			<header id="global-header" class="global-header">

			<div id="page_head" class="page-head clearfix" style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;">
				<div id="sidemenuOpen" class="hamburger-icon sidemenu-open">
					<div class="hamburger-line"></div>
					<div class="hamburger-line"></div>
					<div class="hamburger-line"></div>
				</div>
				<div class="btn-left">
					
        <style>
        .header-clear {
            margin-right: 10px;
            float: left;
            margin-top: 5px;
            margin-left: 10px;
        }
        
        .header-icon-space {
            background-color: transparent;
            width: 13px;
            height: 13px;
            display: inline-block;
            position: relative;
            top: -21px;
            left: 40px;
            border-radius: 50%;
        }
        </style>
        <ul class="page-head-notification-area clearfix">
						
							<li class="header-information">
								<a href="javascript:void(0)" class="btn-header-info btnControl" id="ctrl_btn_info">
									<span class="header-new-icon"></span>
									<img class="header-img" src="/img/head_icon_info.png" title="お知らせ" alt="お知らせ">
								</a>
							</li>
						
						
							<li class="header-notification">
								<a href="javascript:void(0)" class="btn-header-info btnControl" id="ctrl_btn_notification">
									<span class="header-new-icon"></span>
									<img class="header-img" src="/img/head_icon_info_bell.png" title="更新通知" alt="更新通知">
								</a>
							</li>
						
					<li class="header-clear"><a class="btn-header-info btnControl" id="ctrl_btn_clear" href="javascript:void(0);"><span class="header-icon-space"></span>
        <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="opacity: 1;" xml:space="preserve" class="header-img">
        <title>通知削除</title>
        <style type="text/css">
            .st0{fill:#4B4B4B;}
        </style>
        <g>
            <path class="st0" d="M439.114,69.747c0,0,2.977,2.1-43.339-11.966c-41.52-12.604-80.795-15.309-80.795-15.309l-2.722-19.297
                C310.387,9.857,299.484,0,286.642,0h-30.651h-30.651c-12.825,0-23.729,9.857-25.616,23.175l-2.722,19.297
                c0,0-39.258,2.705-80.778,15.309C69.891,71.848,72.868,69.747,72.868,69.747c-10.324,2.849-17.536,12.655-17.536,23.864v16.695
                h200.66h200.677V93.611C456.669,82.402,449.456,72.596,439.114,69.747z" style="fill: rgb(75, 75, 75);"></path>
            <path class="st0" d="M88.593,464.731C90.957,491.486,113.367,512,140.234,512h231.524c26.857,0,49.276-20.514,51.64-47.269
                l25.642-327.21H62.952L88.593,464.731z M342.016,209.904c0.51-8.402,7.731-14.807,16.134-14.296
                c8.402,0.51,14.798,7.731,14.296,16.134l-14.492,239.493c-0.51,8.402-7.731,14.798-16.133,14.288
                c-8.403-0.51-14.806-7.722-14.296-16.125L342.016,209.904z M240.751,210.823c0-8.42,6.821-15.241,15.24-15.241
                c8.42,0,15.24,6.821,15.24,15.241v239.492c0,8.42-6.821,15.24-15.24,15.24c-8.42,0-15.24-6.821-15.24-15.24V210.823z
                M153.833,195.608c8.403-0.51,15.624,5.894,16.134,14.296l14.509,239.492c0.51,8.403-5.894,15.615-14.296,16.125
                c-8.403,0.51-15.624-5.886-16.134-14.288l-14.509-239.493C139.026,203.339,145.43,196.118,153.833,195.608z" style="fill: rgb(75, 75, 75);"></path>
        </g>
        </svg>
        </a></li></ul>
				</div>
				<!-- お知らせ一覧 -->
				
					<ul id="ctrl_menu_info" class="header-control-list control-menu break" style="display: none;">
						<li class="header-control-list header-control-color" style="height:auto;">
							<a class="header-control-colomn" data1="93315" data2="202304SU0074511001" onclick="InfoDetail(event, this.getAttribute('data1'), this.getAttribute('data2'));" style="height:auto;">
								<span class="info_title">教室の変更（斎藤記念館大教室へ）</span>
								
							</a>
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							<a class="header-control-colomn" data1="93340" data2="202303SU0057631001" onclick="InfoDetail(event, this.getAttribute('data1'), this.getAttribute('data2'));" style="height:auto;">
								<span class="info_title">課題1の小テストについて</span>
								<span class="newIcon">new</span>
							</a>
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							<a class="header-control-colomn" data1="93153" data2="202304SU0074591001" onclick="InfoDetail(event, this.getAttribute('data1'), this.getAttribute('data2'));" style="height:auto;">
								<span class="info_title">第2回授業（4/17）へ向けての連絡</span>
								
							</a>
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							<a class="header-control-colomn" data1="92698" data2="202303SU0116851001" onclick="InfoDetail(event, this.getAttribute('data1'), this.getAttribute('data2'));" style="height:auto;">
								<span class="info_title">情報実験I 1〜4回のための開発環境準備のお願い</span>
								
							</a>
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							<a class="header-control-colomn" data1="92601" data2="202303SU0114141001" onclick="InfoDetail(event, this.getAttribute('data1'), this.getAttribute('data2'));" style="height:auto;">
								<span class="info_title">授業動画について</span>
								
							</a>
						</li>
						<li class="header-control-list header-control-color">
							<a class="header-control-colomn" href="/lms/course/information/list">お知らせ一覧へ</a>
						</li>
					</ul>
				
				<!-- 更新通知一覧 -->
				
					<ul id="ctrl_menu_notification" class="header-control-list control-menu break" style="display: none;">
						<li class="header-control-list header-control-color" style="height:auto;">
							
							
								
								
									<a class="header-control-colomn" href="/updateinfo/transition?idnumber=202303SU0116851001&amp;contentId=20018852&amp;module=report&amp;action=submit&amp;clickPoint=1&amp;role=STUDENT&amp;url=%2Flms%2Fcourse%2Freport%2Fsubmission%3Fidnumber%3D202303SU0116851001%26reportId%3D20018852&amp;updateInfoId=190191" style="height:auto;">・課題(第2回 クラス設計)を提出しました。(2023/04/19 17:29)</a>
								
							
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							
							
								
								
									<a class="header-control-colomn" href="/updateinfo/transition?idnumber=202303SU0116851001&amp;contentId=20018857&amp;module=report&amp;action=add&amp;clickPoint=1&amp;role=STUDENT&amp;url=%2Flms%2Fcourse%2Freport%2Fsubmission%3Fidnumber%3D202303SU0116851001%26reportId%3D20018857&amp;updateInfoId=190083" style="height:auto;">・課題(第4回 最終 レポート)が追加されました。(2023/04/19 15:52)</a>
								
							
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							
							
								
								
									<a class="header-control-colomn" href="/updateinfo/transition?idnumber=202303SU0116851001&amp;contentId=20018856&amp;module=report&amp;action=add&amp;clickPoint=1&amp;role=STUDENT&amp;url=%2Flms%2Fcourse%2Freport%2Fsubmission%3Fidnumber%3D202303SU0116851001%26reportId%3D20018856&amp;updateInfoId=190082" style="height:auto;">・課題(第4回 最終 総合テスト結果)が追加されました。(2023/04/19 15:51)</a>
								
							
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							
							
								
								
									<a class="header-control-colomn" href="/updateinfo/transition?idnumber=202303SU0116851001&amp;contentId=20018854&amp;module=report&amp;action=add&amp;clickPoint=1&amp;role=STUDENT&amp;url=%2Flms%2Fcourse%2Freport%2Fsubmission%3Fidnumber%3D202303SU0116851001%26reportId%3D20018854&amp;updateInfoId=190079" style="height:auto;">・課題(第3回 単体テスト実行結果報告)が追加されました。(2023/04/19 15:49)</a>
								
							
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							
							
								
								
									<a class="header-control-colomn" href="/updateinfo/transition?idnumber=202303SU0116851001&amp;contentId=20018853&amp;module=report&amp;action=add&amp;clickPoint=1&amp;role=STUDENT&amp;url=%2Flms%2Fcourse%2Freport%2Fsubmission%3Fidnumber%3D202303SU0116851001%26reportId%3D20018853&amp;updateInfoId=190078" style="height:auto;">・課題(第2回 テストケース作成)が追加されました。(2023/04/19 15:46)</a>
								
							
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							
							
								
								
									<a class="header-control-colomn" href="/updateinfo/transition?idnumber=202304SU0074511001&amp;contentId=20010340&amp;module=test&amp;action=answer&amp;clickPoint=1&amp;role=STUDENT&amp;url=%2Flms%2Fcourse%2Fexamination%2Ftakeresult%3Fidnumber%3D202304SU0074511001%26examinationId%3D20010340&amp;updateInfoId=189993" style="height:auto;">・テスト(小テスト（UXD2023_02）)で解答しました。(2023/04/19 15:00)</a>
								
							
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							
							
								
								
									<a class="header-control-colomn" href="/updateinfo/transition?idnumber=202304SU0074511001&amp;contentId=20014202&amp;module=question&amp;action=add&amp;clickPoint=1&amp;role=STUDENT&amp;url=%2Flms%2Fcourse%2Fsurveys%2Ftake%3Fidnumber%3D202304SU0074511001%26surveyId%3D20014202&amp;updateInfoId=189764" style="height:auto;">・アンケート(小レポート（UXD02_20230419）)が追加されました。(2023/04/19 14:30)</a>
								
							
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							
							
								
								
									<a class="header-control-colomn" href="/updateinfo/transition?idnumber=202304SU0074511001&amp;contentId=20010340&amp;module=test&amp;action=add&amp;clickPoint=1&amp;role=STUDENT&amp;url=%2Flms%2Fcourse%2Fexamination%2Ftaketop%3Fidnumber%3D202304SU0074511001%26examinationId%3D20010340&amp;updateInfoId=189007" style="height:auto;">・テスト(小テスト（UXD2023_02）)が追加されました。(2023/04/19 14:15)</a>
								
							
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							
							
								
								
									<a class="header-control-colomn" href="/updateinfo/transition?idnumber=202303SU0057631001&amp;contentId=20010349&amp;module=test&amp;action=add&amp;clickPoint=1&amp;role=STUDENT&amp;url=%2Flms%2Fcourse%2Fexamination%2Ftaketop%3Fidnumber%3D202303SU0057631001%26examinationId%3D20010349&amp;updateInfoId=189170" style="height:auto;">・テスト(課題1)が追加されました。(2023/04/19 12:00)</a>
								
							
						</li>
						<li class="header-control-list header-control-color" style="height:auto;">
							
							
								
								
									<a class="header-control-colomn" href="/updateinfo/transition?idnumber=202304SU0074591001&amp;contentId=20018823&amp;module=report&amp;action=add&amp;clickPoint=1&amp;role=STUDENT&amp;url=%2Flms%2Fcourse%2Freport%2Fsubmission%3Fidnumber%3D202304SU0074591001%26reportId%3D20018823&amp;updateInfoId=189800" style="height:auto;">・課題(個人：お昼休みのよい体験・悪い体験エピソード)が追加されました。(2023/04/19 11:15)</a>
								
							
						</li>
						<li class="header-control-list header-control-color">
							<a class="header-control-colomn" href="/updateinfo">更新通知一覧へ</a>
						</li>
					</ul>
				
				<div class="page-head-navi">
					<ul class="page-head-navi-unordered-list clearfix">
        <style>
        @media (max-width:650px){
            #link_to_extention{
                display:none;
            }
        }
        </style>
        <li class="page-head-navi-list">
			<a class="page-head-navi-colomn" href="javascript:void(0);" id="link_to_extention">拡張機能設定</a>
		</li>
        
						<li class="page-head-navi-list">
							<a class="page-head-navi-colomn" href="/common/support/manual" id="link_to_manual" target="_manual_inquiry_help">Manual</a>
						</li>
						<li class="page-head-navi-list">
							<a class="page-head-navi-colomn" href="/common/support/inquiry" id="link_to_support" target="_manual_inquiry_help">Contacts</a>
						</li>
						<!-- HELP非表示
						<li class="page-head-navi-list">
							<a class="page-head-navi-colomn" href="/common/support/help" id="link_to_help" th:text="#{header.help.label}" target="_manual_inquiry_help"></a>
						</li>
						-->
						<li class="page-head-navi-list">
							<a class="page-head-navi-colomn" href="/common/settings">Settings</a>
						</li>
						<li class="page-head-navi-list">
							<a class="page-head-navi-colomn" href="/logout">Logout</a>
						</li>
					</ul>
				</div>
				<div class="page-head-navi-sp">
					<div class="btn-control btnControl relativeBtn">
						<ul class="control-menu" style="display: none;">
							<li class="control-list"><a class="control-menu-colomn" href="/common/support/manual" id="link_to_manual" target="_blank">Manual</a></li>
							<li class="control-list"><a class="control-menu-colomn" href="/common/support/inquiry" id="link_to_support" target="_blank">Contacts</a></li>
							<!--　HELP非表示
							<li class="control-list"><a class="control-menu-colomn" href="/common/support/help" id="link_to_help" th:text="#{header.help.label}" target="_blank"></a></li>
							-->
							<li class="control-list"><a class="control-menu-colomn" href="/common/settings">Settings</a></li>
							<li class="control-list"><a class="control-menu-colomn" href="/logout">Logout</a></li>
						</ul>
					</div>
				</div>
			
            <a href="/portal/home" id="pagetop-head-logo"><div class="mainmenu-head-logo"><img src="/sitelogo" class="scombz-icon" alt="Top"></div></a>
            </div>
		</header>

			<div id="pageContents" class="sidemenu-hide">

				<div class="page-outline">
					<!--ログイン情報-->
					<div>

		<script>
		/*<![CDATA[>*/
		var changeDisplay = function (params) {
			
			if(typeof progress == "undefined" || progress == null) {
				progress = CommonUtil.createProgress("\u30C7\u30FC\u30BF\u51E6\u7406\u4E2D\u3067\u3059");
				progress.open();
			}
			var array = params.split(',');
			url = "/lms/course?idnumber=" + array[0];

			var param = {
				selectDisplayView: array[1]
			};

			$.ajax({
				type : "GET",
				url: url,
				dataType : "html",
				data : param,
				cache: false
			}).done(function(){
			}).always(function() {
				window.location.href = url;
			});
		};

		/*]]>*/
		</script>

		<div class="login-view clearfix">

			
			
				
				<div class="login-view-name bold-txt"></div>
			

			
			

			
			

			
			
		</div>
	</div>
				</div>

				<!--ページコンテンツ-->
				<div>

	<div id="report_view">

		<div class="course-header">
			
			<div class="course-title-txt">システム理工学部 03SU011694 情報実験I</div>
			<div class="contents-title">
				<div class="contents-title-txt">課題提出</div>
				<div class="highlight-txt">
					<span>※編集後は、ページ下の「確認画面に進む」から確認画面を表示し、最後に「登録する」ボタンをクリックしてください。</span>
				</div>
			</div>

			<div class="course-header-detail">
				
				<div class="contents-detail contents-vertical">
					
					<div class="contents-header contents-header-txt">
						<span class="bold-txt">対象授業</span>
					</div>
					<div class="contents-input-area">
						<div>第2回(No.2)</div>
					</div>
				</div>
				
				<div class="contents-detail contents-vertical">
					
					<div class="contents-header contents-header-txt">
						<span class="bold-txt">タイトル</span>
					</div>
					<div class="contents-input-area">
						<div>第2回 クラス設計</div>
					</div>
				</div>
				
				<div class="contents-detail contents-vertical">
					
					<div class="contents-header contents-header-txt">
						<span class="bold-txt">内容</span>
					</div>
					<div class="contents-input-area">
						<div id="bodyEditor" style="border: initial;" class="ql-container ql-snow ql-disabled"><div class="ql-editor" data-gramm="false" contenteditable="false"><p>クラス図を提出してください。クラス図はastah*のファイルではなくPNGで提出をお願いします。</p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div></div>
					</div>
				</div>
				
				<div class="contents-detail contents-vertical">
					
					<div class="contents-header contents-header-txt">
						<span class="bold-txt">添付ファイル</span>
					</div>
					<div class="contents-input-area">
						
					</div>
				</div>
				
				<div class="contents-detail contents-vertical">
					
					<div class="contents-header contents-header-txt">
						<span class="bold-txt">提出期間</span>
					</div>
					<div class="contents-input-area">
						<span>2023/04/19 08:00</span>
						<span>～</span>
						<span>2023/04/26 00:00</span>
					</div>
				</div>
				
				<div class="contents-detail contents-vertical">
					
					<div class="contents-header contents-header-txt">
						<span class="bold-txt">期間外提出</span>
					</div>
					<div class="contents-input-area">
						<div>不可</div>
						
					</div>
				</div>
				
				<div class="contents-detail contents-vertical">
					
					<div class="contents-header contents-header-txt">
						<span class="bold-txt">学習区分</span>
					</div>
					<div class="contents-input-area">
						
						<div>復習</div>
					</div>
				</div>
			</div>
		</div>

		
		<div>

		
		<input id="downloadDialogMessage1" type="hidden" value="選択されたファイルはウイルスチェックを完了していません。">
		<input id="downloadDialogMessage2" type="hidden" value="このファイルは暗号化されている為、ウイルス対策ソフトウエアによるチェックが出来ませんでした。">
		<input id="downloadCancelMessage" type="hidden" value="キャンセル">
		<input id="downloadExecMessage" type="hidden" value="ダウンロード">

		<script>

			var downloadFormParts = {};
			downloadFormParts.fileDownload = function(element) {

				
				var targetElement = $(element).parent();
				var downloadFileName = targetElement.find(".fileName").text();
				var objectName = targetElement.find(".objectName").text();

				
				$("#downloadFileName").val(downloadFileName);
				$("#downloadObjectName").val(objectName);

				
				if(typeof(fileDownloadCb) !== "undefined") {
					fileDownloadCb(element);
					downloadFileName = $("#downloadFileName").val();
				}

				
				$("#reportDownloadForm").attr("action", "/lms/course/report/submission_download" + "/" + CommonUtil.makeDownFileName(downloadFileName)).attr("method", "get");

				
				$("#reportDownloadForm").attr("target", "_blank");

				submitProgressFlag = false;
				
				$("#reportDownloadForm").submit();
			};

			downloadFormParts.onClick = function() {
				var me = this;

				var scanStatus = $(this).parent().find(".scanStatus").text();
				

				var confmsg= $("#downloadDialogMessage1").val();
				if(scanStatus === "9") {
					confmsg= $("#downloadDialogMessage2").val();
				}
				if(scanStatus === "9" || scanStatus === "0") {
					var dialog = CommonUtil.createMessageDialog(confmsg);
					if($(window).width() < 481){
						dialog = CommonUtil.createMessageDialog(confmsg,"90%");
					}
					dialog.addBottun($("#downloadCancelMessage").val());
					dialog.addBottun($("#downloadExecMessage").val(), "", function() {
						downloadFormParts.fileDownload(me);
						dialog.close();
					});
					dialog.open();
				}
				
				else {
					downloadFormParts.fileDownload(me);
				}
			};

			downloadFormParts.setClickEvent = function() {
				$(".downloadFile").off("click").click(downloadFormParts.onClick);
			};

			
			CommonUtil.addOnLoad(downloadFormParts.setClickEvent);
		</script>

		<form action="/lms/course/report/submission_download" method="get" id="reportDownloadForm">
			<input type="hidden" name="reportId" value="20018852">
			<input type="hidden" name="idnumber" value="202303SU0116851001">
			<input type="hidden" name="downloadFileName" value="" id="downloadFileName">
			<input type="hidden" name="objectName" value="" id="downloadObjectName">
			<input type="hidden" name="downloadMode" id="downloadMode" value="">
		</form>
	</div>

		<form action="/lms/course/report/submission" method="post" id="reportSubmissionForm" enctype="multipart/form-data"><input type="hidden" name="_cid" value="f6659588-fae2-4bee-9f08-dbcc308bb450"><input type="hidden" name="_csrf" value="c8d18f2c-60a9-4914-b923-f9d8e1d8837d">

			
			<input type="hidden" name="method" value="0">
			<input type="hidden" name="idnumber" value="202303SU0116851001">
			<input id="reportId" type="hidden" name="reportId" value="20018852">
			<input type="hidden" name="materialTitle" value="第2回(No.2)">

			<div>
				
				
		<div class="error-count-message-area">
			
			
				
			
		</div>
	
			</div>

			
			

			<!--既に提出済みの成果物 -->
			

			
				<!-- 成果物提出 -->
				<input type="hidden" id="isDragAndDrop" name="dragAndDrop" value="true">
				
				<div class="block clearfix">
					
					<div class="report-submission-link-area">
						<a id="toDragAndDrop" class="link-txt contents-hidden">ドラッグ＆ドロップでファイルをアップロードする</a>
						<a id="toSelectFile" class="link-txt">ファイル選択でアップロードする</a>
					</div>
					
					<div id="report" class="contents-list contents-hidden">
						
						<div class="contents-detail contents-vertical">
							
							<div class="report-submission-file-title-header-area contents-header-txt report-color">
								<span class="bold-txt">成果物提出</span>
							</div>
							
							<div id="submissionArea" class="result-list submissionArea"><div class="result-list contents-detail report-submission-area submissionContentsArea" style="display: block;">


			
			<button type="button" class="fileSelectButton">参照</button>
			
			<input type="file" class="fileSelectInput" name="uploadFiles" style="display : none;">
			<input type="hidden" class="originalFileName" name="originalFileName" value="">
			<input type="hidden" name="fileId" value="0">
			<input type="hidden" name="rowCounter" value="1">


			
			<span class="fileSelectName">ファイルが選択されていません。</span>

			
			<a class="input-file-btn-area btn btn-inline btn-file-margin btn-txt btn-color clearfile messageDelete">取消</a>
			
			<div class="contents-detail" style="margin-top: 10px;">
				<div>ファイル名(任意)
                <input type="button" class="autoInputNameBtn" value="自動入力" onclick="javascript:this.parentNode.nextElementSibling.value='AA00000_山田太郎';">
                </div>
				<input type="text" name="fileName" class="input input-box">
			</div>
			
			<div class="contents-detail" style="margin-top: 10px;">
				<div>コメント(任意)</div>
				<input type="text" name="comment" class="input input-box">
			</div>
		</div>
								
							</div>
							<div class="contents-list">
								
								<div class="result-list contents-display-flex">
									<a class="input-file-btn-area btn-inline btn-txt btn-color fileadd">ファイル追加</a>
								</div>
								
								<div id="add_contents_msg" class="highlight-txt"></div>
								
								
							</div>
						</div>
						
						<div class="contents-detail contents-vertical">
							
							<div class="report-submission-file-title-header-area contents-header-txt report-color">
								<span class="bold-txt">作成時間</span>
								<span class="bold-txt">[必須]</span>
							</div>
							
							<div class="contents-list">
								<div class="contents-detail contents-vertical">
									
									<div class="contents-input-area">
										<input type="text" class="input input-small-box" name="creationTime" value="0">
										<span>分</span>
										
									</div>
								</div>
							
                <style>
                .minBtn{
                    margin:2px 0;
                    padding:2px 4px;
                    min-width:50px;
                    font-size:14px;
                }
                .minBtnArea,minBarArea{
                    width:100%;
                }
                .min-slider-bar{
                    margin:10px 25px;
                    width:90%;
                    max-width:500px;
                }
                </style>
                <div class="minBtnArea">
                <input type="button" value="10分" class="minBtn" style="margin-left:25px">
                <input type="button" value="30分" class="minBtn">
                <input type="button" value="60分" class="minBtn">
                <input type="button" value="100分" class="minBtn">
                <input type="button" value="200分" class="minBtn">
                <input type="button" value="300分" class="minBtn">
                <input type="button" value="600分" class="minBtn">
                </div>
                <div class="minBarArea">
                <input type="range" min="0" max="600" step="30" class="min-slider-bar">
                </div>
                </div>
						</div>
					</div>
					
					<div id="report_dad" class="contents-list">
						<div class="contents-detail contents-vertical">
							
							<div class="report-submission-file-title-header-area contents-header-txt report-color">
								<span class="bold-txt">成果物提出</span>
							</div>
							
							<div id="submissionArea" class="contents-list submissionArea">
								<div class="result-list contents-display-flex">
									
									<div class="contents-detail">
										
										<div id="fileDadArea" class="drag-drop-area">このエリアに対象ファイルをドラッグ＆ドロップするとファイルがアップロードされます。</div>
										
										<div id="add_upload_msg" class="highlight-txt"></div>
										
										
									</div>
								</div>
							</div>
							
							<div id="dad_file_area">
								
							</div>
						</div>
						
						<div class="contents-detail contents-vertical">
							
							<div class="report-submission-file-title-header-area contents-header-txt report-color">
								<span class="bold-txt">作成時間</span>
								<span class="bold-txt">[必須]</span>
							</div>
							
							<div class="contents-list">
								<div class="contents-detail contents-vertical">
									
									<div class="contents-input-area">
										<input type="text" class="input input-small-box" name="creationTime" value="0">
										<span>分</span>
										
									</div>
								</div>
							
                <style>
                .minBtn{
                    margin:2px 0;
                    padding:2px 4px;
                    min-width:50px;
                    font-size:14px;
                }
                .minBtnArea,minBarArea{
                    width:100%;
                }
                .min-slider-bar{
                    margin:10px 25px;
                    width:90%;
                    max-width:500px;
                }
                </style>
                <div class="minBtnArea">
                <input type="button" value="10分" class="minBtn" style="margin-left:25px">
                <input type="button" value="30分" class="minBtn">
                <input type="button" value="60分" class="minBtn">
                <input type="button" value="100分" class="minBtn">
                <input type="button" value="200分" class="minBtn">
                <input type="button" value="300分" class="minBtn">
                <input type="button" value="600分" class="minBtn">
                </div>
                <div class="minBarArea">
                <input type="range" min="0" max="600" step="30" class="min-slider-bar">
                </div>
                </div>
						</div>
					</div>
				</div>

				
				
			

			<!-- フッターボタン表示領域 -->
			<div class="block-under-area">
				
				<div class="under-area-txt">
					<div>上記内容でよろしければ「確認画面に進む」ボタンをクリックして次に進んでください。</div>
				</div>

				

				
				<div class="block-under-area-btn" style="max-width: 450px;">

					
					

					
					

					
					
						<a id="report_submission_btn" class="under-btn btn-txt btn-color">確認画面に進む</a>
					
				<a class="under-btn btn-txt btn-color course_on_report_submission" href="/lms/course?idnumber=202303SU0116851001&amp;_cid=f6659588-fae2-4bee-9f08-dbcc308bb450" id="back">保存せずに前の画面に戻る</a></div>
			</div>
		</form>

		
		
		<div id="add_block" class="result-list contents-detail report-submission-area submissionContentsArea" style="display : none">


			
			<button type="button" class="fileSelectButton">参照</button>
			
			<input type="file" class="fileSelectInput" name="uploadFiles" style="display : none;">
			<input type="hidden" class="originalFileName" name="originalFileName" value="">
			<input type="hidden" name="fileId" value="0">
			<input type="hidden" name="rowCounter" value="1">


			
			<span class="fileSelectName">ファイルが選択されていません。</span>

			
			<a class="input-file-btn-area btn btn-inline btn-file-margin btn-txt btn-color clearfile messageDelete">取消</a>
			
			<div class="contents-detail" style="margin-top: 10px;">
				<div>ファイル名(任意)
                <input type="button" class="autoInputNameBtn" value="自動入力" onclick="javascript:this.parentNode.nextElementSibling.value='AA00000_山田太郎';">
                </div>
				<input type="text" name="fileName" class="input input-box">
			</div>
			
			<div class="contents-detail" style="margin-top: 10px;">
				<div>コメント(任意)</div>
				<input type="text" name="comment" class="input input-box">
			</div>
		</div>

		
		<div id="dad_add_block" class="clearfix dadSubmissionBlock" style="display : none;">
			<div class="result-list contents-display-flex">
				<input type="hidden" name="originalFileName" class="dad_originalFileName" value="">
				<input type="hidden" name="fileId" value="0">
				<input type="hidden" name="rowCounter" value="1">

				
				<div class="dad_fileSelectName onebox_row"></div>

				
				<a href="/course" class="input-file-btn-area btn btn-inline btn-file-margin btn-txt btn-color dad_clearfile messageDelete">取消</a>
			</div>
			<div class="result-list contents-display-flex">
				
				<div class="contents-detail" style="margin-top: 10px;">
					<div>ファイル名(任意)
                <input type="button" class="autoInputNameBtn" value="自動入力" onclick="javascript:this.parentNode.nextElementSibling.value='AA00000_山田太郎';">
                </div>
					<input type="text" class="input input-box" name="fileName">
				</div>
			</div>
			<div class="result-list contents-display-flex">
				
				<div class="contents-detail" style="margin-top: 10px;">
					<div>コメント(任意)</div>
					<input type="text" name="comment" class="input input-box">
				</div>
			</div>
		</div>
	</div>
</div>

				<!--ダイレクトリンク-->
				<div>
			
		</div>
			</div>

			<!--フッタ-->
			<div id="page_foot" class="page-foot">
		<div class="page-foot-contents clearfix">
			<a target="_blank" class="page-foot-logo" href="https://www.shibaura-it.ac.jp">
				<img src="/footerlogo">
			</a>
			<div class="page-foot-link">
				<ul class="page-foot-link-contents">
					<li class="page-foot-link-list"><a class="page-foot-link-colomn" target="_blank" href="https://www.shibaura-it.ac.jp">このサイトについて</a></li>
					<li class="page-foot-link-list"><a class="page-foot-link-colomn" target="_blank" href="https://www.shibaura-it.ac.jp">プライバシーポリシー</a></li>
					<li class="page-foot-link-list"></li>
				</ul>
			</div>
		</div>
		
	</div>
		
            <div id="graylayer" onclick="document.getElementById('sidemenuClose').click();"></div>
            <p class="usFooter">ScombZ Utilities ver.3.19.0<br><a style="color:#000000;" href="https://github.com/yudai1204/ScombZ-Utilities" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            
            <style type="text/css">
                .SubTimetable {
                    text-align:center;
                    decolation:none;
                    font-size:100%;
                }
                @media(max-width:1281px){
                    .SubTimetable {
                        font-size:90%;
                    }
                }
                td.SubTimetable , th.SubTimetable {
                    width:calc((100vw - 300px)/7);
                    height:4vh;
                    background:#EDF3F7;
                }
                td.SubTimetable:nth-child(1) , th.SubTimetable:nth-child(1) {
                    width:30px;
                    background:#ec9c93;
                }
                th.SubTimetable{
                    background:#bea87b;
                    height:30px;
                }
                a.SubTimetable{
                    display:block;
                    width:100%;
                    height:100%;
                    min-height:40px;
                }
                a.SubTimetable:hover{
                    background:rgba(206, 213, 217,0.5);
                }
                .subtimetableBodyCulm{
                    background:rgba(255,255,255,0.5);
                }
            </style>
            <div class="subtimetableBody">
            <div class="subtimetableBodyCulm">
            <table id="subTimetable" class="SubTimetable">
                <thead>
                    <tr>
                        <th class="SubTimetable"></th>
                        <th class="SubTimetable">月</th>
                        <th class="SubTimetable">火</th>
                        <th class="SubTimetable">水</th>
                        <th class="SubTimetable">木</th>
                        <th class="SubTimetable">金</th>
                        <th class="SubTimetable">土</th>
                    </tr>
                </thead>
                <tbody><tr><td class="SubTimetable">1</td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0058671001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">グラフ理論とネットワーク</span></a></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0058511001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">通信網工学</span></a></td><td class="SubTimetable"></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0060711001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">ハードウェア基礎</span></a></td><td class="SubTimetable"></td><td class="SubTimetable"></td></tr><tr><td class="SubTimetable">2</td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0110741001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">化学I</span></a></td><td class="SubTimetable"></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0057631001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">電気磁気学I</span></a></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0017351001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">先端技術とビジネス</span></a></td><td class="SubTimetable"></td><td class="SubTimetable"></td></tr><tr><td class="SubTimetable">3</td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0058351001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">人工知能基礎</span></a></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0114141001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">オペレーティングシステム</span></a></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202304SU0074511001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">ＵＸデザイン</span></a></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0116851001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">情報実験I</span></a></td><td class="SubTimetable"></td><td class="SubTimetable"></td></tr><tr><td class="SubTimetable">4</td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202304SU0074591001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">ＵＸデザイン演習</span></a></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0060631001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">情報セキュリティ</span></a></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0058271001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">言語処理系</span></a></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0116851001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">情報実験I</span></a></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0059671001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">確率統計</span></a></td><td class="SubTimetable"></td></tr><tr><td class="SubTimetable">5</td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202304SU0074591001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">ＵＸデザイン演習</span></a></td><td class="SubTimetable"></td><td class="SubTimetable"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0058111001" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">画像情報処理</span></a></td><td class="SubTimetable"></td><td class="SubTimetable"></td><td class="SubTimetable"></td></tr></tbody></table></div></div>
            <style>
                #subTaskList{
                    top: max(40vh,350px);
                    transform: translateY(0px);
                    background: rgba(255,255,255,0.5);
                    width: 60vw;
                    min-width: 550px;
                    padding: 2px;
                }
                #add-task-manual{
                    display:inline-block;
                    font-weight: bold;
                    font-size:90%;
                    text-decoration:underline;
                    color:#222;
                    margin-left:10px;
                }
                #add-task-manual:hover{
                    background-color:#7773;
                }
                .task-get-time{
                    display:inline-block;
                    font-weight: normal;
                    font-size: 80%;
                    text-decoration:none;
                    color:#222;
                }
                .subk-head-right-contents{
                    display: inline-block;
                    float:right;
                    margin-top:-2px;
                }
                .subk-box{
                    margin:0;
                }
                .subk-head{
                    margin:0;
                    padding:4px;
                    background:#fff;
                    border-bottom:2px solid #ccc;
                    font-size:15px;
                    padding-left:10px;
                    font-weight:bold;
                    height:23px;
                }
                .subk-line{
                    height:25px;
                    padding:2px;
                    margin:0;
                    background:#fff;
                    border-bottom:1px solid #ccc;
                }
                .subk-line:nth-child(2n){
                    background:#FFFAF0;
                }
                .subk-subjname{
                    font-size:12px;
                    padding:2px;
                    width:100%;
                    white-space: nowrap; 
                    overflow: hidden; 
                    text-overflow: ellipsis;
                }
                div.subk-link{
                    padding:2px 2px 0px 2px;
                    font-size:14px;
                    margin-left:10px;
                    max-width:100%;
                    white-space: nowrap; 
                    overflow: hidden;
                    text-overflow: ellipsis; 
                }
                a.subk-link{
                    display: inline-block;
                    min-width:80%;
                    height:100%;
                    color: #111;
                }
                a.subk-link:hover span.subk-link{
                    background:rgba(0,0,100,0.1);
                }
                .subk-deadline{
                    margin-top:2px;
                    margin-right:4px;
                    font-size:14px;
                    float:right;
                }
                .subk-column{
                    margin:0;
                    padding:0;
                    float:left
                }
                .subk-column:nth-child(3n+1){
                    width:30%;
                    float:left;
                }
                .subk-column:nth-child(3n+2){
                    min-width:160px;
                    width:calc(70% - 270px);
                }
                .relative-deadline-time{
                    font-size:80%;
                    margin-right:20px;
                    color:#f00;
                }
                .highlightMark .relative-deadline-time{
                    color:#999;
                }
                .today.highlightMark .relative-deadline-time,.today.highlightMark .subk-deadline-time{
                    color:#f00;
                    font-weight:bold;
                    font-size: 91%;
                }
                .shorttime.highlightMark,.shorttime.highlightMark .subk-deadline-time{
                    background-color:#faa;
                }
                .a-few-days.highlightMark .relative-deadline-time,.a-few-days.highlightMark .subk-deadline-time{
                    color:#f22;
                }
                .a-week.highlightMark .relative-deadline-time{
                    color:#333;
                }
                .subk-subjname-link{
                    color: #000;
                    text-decoration: none;
                }
                .subk-subjname-link:hover{
                    color: #222;
                    text-decoration: underline;
                }
                .subk-remove-btn{
                    display: inline-block;
                    float:right;
                    width:15px;
                    height:15px;
                    margin-left:5px;
                    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20id%3D%22_x32_%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22width%3A%2032px%3B%20height%3A%2032px%3B%20opacity%3A%201%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%234B4B4B%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpolygon%20class%3D%22st0%22%20points%3D%22512%2C52.535%20459.467%2C0.002%20256.002%2C203.462%2052.538%2C0.002%200%2C52.535%20203.47%2C256.005%200%2C459.465%20%0A%09%0952.533%2C511.998%20256.002%2C308.527%20459.467%2C511.998%20512%2C459.475%20308.536%2C256.005%20%09%22%20style%3D%22fill%3A%20rgb(24%2C%2024%2C%2024)%3B%22%3E%3C%2Fpolygon%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A');
                    background-size:8px;
                    background-repeat:no-repeat;
                    background-position: center center;
                    background-color:#faa6;
                    background-blend-mode:lighten;
                    visibility: hidden;
                    border-radius:100px;
                }
                div.subk-line:hover .subk-remove-btn{
                    visibility:visible;
                }
                .subk-remove-btn:hover{
                    background-color:#f776;
                }
                .subk-deadline-time{
                    display: inline-block;
                }
                @media(max-width:1080px){
                    .relative-deadline-time{
                        display:none;
                    }
                    .subk-column:nth-child(3n+2){
                        width:calc(70% - 160px);
                    }
                    .subk-remove-btn{
                        display:none;
                    }
                }
            </style>
            <div class="subtimetableBody" id="subTaskList">
            <div class="subk-box">
                <div class="subk-head">
                課題一覧
                    <div class="subk-head-right-contents">
                        <a class="task-get-time" id="reloadTasks" href="javascript:void(0);">最終更新:2023/4/19 17:50</a>
                        <a id="add-task-manual" href="javascript:void(0);">追加</a>
                    </div>
                </div>
                
                    <div class="subk-line a-few-days highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0059671001">確率統計</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://あ"><span class="subk-link">演習課題(プリント)</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約1日</span>2023/04/21 15:00:00</div><a class="subk-remove-btn" data-value="manual1681458750576" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line a-week highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0058351001">人工知能基礎</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/report/submission?idnumber=202303SU0058351001&amp;reportId=20018553"><span class="subk-link">QUIZ2-1</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約4日</span>2023/04/24 00:00:00</div><a class="subk-remove-btn" data-value="202303SU0058351001report20018553" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line a-week highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202304SU0074591001">ＵＸデザイン演習</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/report/submission?idnumber=202304SU0074591001&amp;reportId=20018823"><span class="subk-link">個人：お昼休みのよい体験・悪い体験エピソード</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約4日</span>2023/04/24 13:30:00</div><a class="subk-remove-btn" data-value="202304SU0074591001report20018823" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line a-week highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202304SU0074591001">ＵＸデザイン演習</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://."><span class="subk-link">昼休みのインタビュー</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約4日</span>2023/04/24 15:00:00</div><a class="subk-remove-btn" data-value="manual1681720095241" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line a-week highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0114141001">オペレーティングシステム</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/report/submission?idnumber=202303SU0114141001&amp;reportId=20017483"><span class="subk-link">Quiz-2</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約5日</span>2023/04/24 22:00:00</div><a class="subk-remove-btn" data-value="202303SU0114141001report20017483" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line a-week highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0057631001">電気磁気学I</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/examination/taketop?idnumber=202303SU0057631001&amp;examinationId=20010349&amp;answerStatus=0"><span class="subk-link">課題1</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約5日</span>2023/04/24 23:59:00</div><a class="subk-remove-btn" data-value="202303SU0057631001examination20010349answerStatus=0" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line a-week highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0058271001">言語処理系</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/examination/taketop?idnumber=202303SU0058271001&amp;examinationId=20009859&amp;answerStatus=0"><span class="subk-link">第01回 小テスト</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約6日</span>2023/04/25 23:59:00</div><a class="subk-remove-btn" data-value="202303SU0058271001examination20009859answerStatus=0" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line a-week highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0058271001">言語処理系</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/examination/taketop?idnumber=202303SU0058271001&amp;examinationId=20009860&amp;answerStatus=0"><span class="subk-link">第02回 小テスト</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約6日</span>2023/04/25 23:59:00</div><a class="subk-remove-btn" data-value="202303SU0058271001examination20009860answerStatus=0" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line a-week highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0116851001">情報実験I</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/report/submission?idnumber=202303SU0116851001&amp;reportId=20018852"><span class="subk-link">第2回 クラス設計</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約6日</span>2023/04/26 00:00:00</div><a class="subk-remove-btn" data-value="202303SU0116851001report20018852" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line a-week highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0116851001">情報実験I</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/report/submission?idnumber=202303SU0116851001&amp;reportId=20018853"><span class="subk-link">第2回 テストケース作成</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約6日</span>2023/04/26 00:00:00</div><a class="subk-remove-btn" data-value="202303SU0116851001report20018853" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0058351001">人工知能基礎</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/report/submission?idnumber=202303SU0058351001&amp;reportId=20018767"><span class="subk-link">事前学習課題3</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約12日</span>2023/05/01 20:00:00</div><a class="subk-remove-btn" data-value="202303SU0058351001report20018767" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0116851001">情報実験I</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/report/submission?idnumber=202303SU0116851001&amp;reportId=20018854"><span class="subk-link">第3回 単体テスト実行結果報告</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約20日</span>2023/05/10 00:00:00</div><a class="subk-remove-btn" data-value="202303SU0116851001report20018854" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0116851001">情報実験I</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/report/submission?idnumber=202303SU0116851001&amp;reportId=20018856"><span class="subk-link">第4回 最終 総合テスト結果</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約28日</span>2023/05/18 00:00:00</div><a class="subk-remove-btn" data-value="202303SU0116851001report20018856" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=202303SU0116851001">情報実験I</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/report/submission?idnumber=202303SU0116851001&amp;reportId=20018857"><span class="subk-link">第4回 最終 レポート</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約28日</span>2023/05/18 00:00:00</div><a class="subk-remove-btn" data-value="202303SU0116851001report20018857" href="javascript:void(0);"></a></div>
                    </div>
                    <div class="subk-line highlightMark">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=2023com0003759902">電子情報システム学科3年生</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="https://scombz.shibaura-it.ac.jp/lms/course/report/submission?idnumber=2023com0003759902&amp;reportId=20017056"><span class="subk-link">【重要／必ず受験してください】基礎力測定テスト「PROG」のWEB受験</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"><span class="relative-deadline-time">残約42日</span>2023/05/31 23:00:00</div><a class="subk-remove-btn" data-value="2023com0003759902report20017056" href="javascript:void(0);"></a></div>
                    </div>
            </div>
            
            <style>
            .note-line{
                padding:2px;
                margin:0;
                background:#fff;
                border-bottom:1px solid #ccc;
            }
            .note-line:nth-child(2n){
                background:#FFFAF0;
            }
            .note-head{
                font-size:15px;
                border-bottom: 2px solid #ccc;
                border-top: 1px solid #ccc;
                font-weight:bold;
                padding-left: 10px;
            }
            .note-title{
                display:block;
                width:calc(30% - 4px);
                font-size:15px;
                float:left;
                overflow:hidden;
                margin:0;
            }
            .note-index{
                display:block;
                font-size:14px;
                width:calc(69% - 30px);
                float:left;
                margin:0;
            }
            .memo-remove{
                width:30px;
                margin:0;
                float:left;
                font-weight:normal;
                color:#222;
                text-decoration: underline;
            }
            .note-kara{
                clear:left;
            }
            .memo-add{
                float:right;
                color:#222;
                text-decoration: underline; 
            }
            </style>
            <div class="note-line note-head">
                ユーザーメモ
                <a id="memoAdd" href="javascript:void(0);"><div class="memo-add">追加する</div></a>
            </div>
            
            </div>
            
            <style>
                #manAddtaskSelectBackground{
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    z-index: 120;
                    background: #0007;
                    top: 0;
                    left: 0;
                    display:none;
                }
                #manAddtaskSelectLayer{
                    position: fixed;
                    width: 80%;
                    height: 70vh;
                    background-color:#fff;
                    top: 50%;
                    left: 50%;
                    transform: translateY(-50%) translateX(-50%);
                    z-index: 125;
                    text-align:center;
                    padding:30px;
                    display:none;
                }
                .manadd-column{
                    box-shadow: 0 0 3px #777;
                    border-radius: 10px;
                    padding:10px;
                    margin:10px;
                    text-align:left;
                }
                .manadd-column > div{
                    display: block;
                    margin:10px;
                }
                .manadd-column > div > input[type="text"]{
                    width:100%;
                }
                .manadd-column-name{
                    margin-right:10px;
                    display:inline-block;
                    width:120px;
                }
                
            </style>
            <div id="manAddtaskSelectBackground"></div>
            <div id="manAddtaskSelectLayer">
                <h1>課題手動追加</h1>
                <form onsubmit="return false;">
                <div class="manadd-column">
                    <div><span class="manadd-column-name">科目名</span><input type="text" id="manAddtaskSubjname" required=""></div>
                    <div><span class="manadd-column-name">科目リンク</span><input type="text" id="manAddtaskSubjlink" required=""></div>
                </div>
                <div class="manadd-column">
                    <div><span class="manadd-column-name">課題タイトル</span><input type="text" id="manAddtaskTaskname" required=""></div>
                    <div><span class="manadd-column-name">課題リンク</span><input type="text" id="manAddtaskTasklink" required=""></div>
                </div>
                <div class="manadd-column">
                    <span class="manadd-column-name">締め切り</span>
                    <input type="date" id="manAddtaskDeadlineDate" required="">
                    <input type="time" id="manAddtaskDeadlineTime" required="">
                </div>
                <div>
                    <button id="manAddtaskConfirm" type="submit">追加する</button>
                    <button type="button" onclick="javascript:document.getElementById('manAddtaskSelectBackground').click();">キャンセル</button>
                </div>
                </form>
            </div>
            
            
            <style>
            .noteInput{
                width:60vw;
                height:60vh;
                position:fixed;
                z-index:102;
                background:#fff;
                visibility:hidden;
                right:20vw;
                top:20vh;
            }
            .noteInput.inputmode{
                width:60vw;
                height:60vh;
                position:fixed;
                z-index:101;
                background:#fff;
                visibility:visible;
                right:20vw;
                top:20vh;
                border-radius:5px;
            }
            .noteInputLayer{
                width:100%;
                height:100%;
                margin:0;
                padding:0;
                z-index:101;
                background:#0009;
                position:fixed;
                top:0;
                left:0;
                visibility:hidden;
            }
            .noteInputLayer.inputmode{
                visibility:visible;
            }
            .noteInputTitle{
                width:80%;
                height:80px;
                margin:0 auto;
                display:block;
            }
            .noteInputIndex{
                width:80%;
                height:calc(100% - 220px);
                margin:0 auto;
                display:block;
            }
            .noteInput h4{
                margin:0;
            }
            .noteInput h1{
                margin:0;
                text-align:center;
                margin-top:10px
            }
            .noteInput input[type="text"]{
                width:100%;
                height:28px;
                font-size:16px;
            }
            .noteInput textarea{
                width:100%;
                height:calc(100% - 16px);
                font-size:14px;
            }
            div.noteSaveBtn{
                width:100%;
                text-align:center;
                margin-top:3.5%;
            }
            input[type="button"]#noteSaveBtn{
                width:50%;
                height:4vh;
                min-width:120px;
                min-height:20px;
                min-height:40px;
            }
            .in-note-link{
                color:#00F;
            }
            </style>
            <div id="noteInputLayer" class="noteInputLayer notelayer"></div>
            <div class="noteInput notelayer">
            <h1>メモを追加</h1>
            <div class="noteInputTitle"><h4>タイトル</h4><input type="text" id="noteInputTitle" value="新規メモ"></div>
            <div class="noteInputIndex"><h4>本文</h4><textarea id="noteInputIndex">リンクを作れます 例:[[https://google.co.jp]]</textarea></div>
            <div class="noteSaveBtn"><input type="button" value="保存する" id="noteSaveBtn"></div>
            </div>
            </div>
		
		<div id="progressMessage" hidden="true">データ処理中です</div>
	</div>

	<!-- お知らせ詳細 -->
	<div>
		<form action="/lms/course/information/list" method="post" id="informationDtl"><input type="hidden" name="_cid" value="f6659588-fae2-4bee-9f08-dbcc308bb450"><input type="hidden" name="_csrf" value="c8d18f2c-60a9-4914-b923-f9d8e1d8837d">
			<input type="hidden" id="viewPage" name="viewPage" value="1">
			<input type="hidden" id="viewkind" name="viewkind" value="9">
			<input type="hidden" id="informationId" name="informationId">
		</form>
		<div id="info_detail_view2" hidden="true"></div>
	</div>


</body>
    `
}