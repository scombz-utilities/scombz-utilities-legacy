function modifyCoursePageTitle() {
    const isCourseTopPage =
        location.href.split(location.search).join('') ===
        'https://scombz.shibaura-it.ac.jp/lms/course'
    const courseTitle = document.querySelector(
        '#courseTopForm > div.course-header > div:nth-child(1) > div.course-title-txt.course-view-header-txt'
    )
    if (isCourseTopPage && courseTitle) {
        // 科目名を取得する。例えば、「学部 01CD456789 Course Name」のような文字列から科目名（この例では「Course Name」）を抽出する
        const courseName = courseTitle.textContent
            .split(/ [0-9A-Za-z]{10} /)
            .at(-1)

        // 「科目名 - 科目トップ」のような表示にする
        document.title = `${courseName} - ${document.title}`
    }
}
