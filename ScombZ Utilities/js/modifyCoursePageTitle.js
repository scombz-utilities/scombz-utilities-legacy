function modifyCoursePageTitle() {
    const isCourseTopPage =
        location.href.split(location.search).join('') ===
        'https://scombz.shibaura-it.ac.jp/lms/course'
    const courseTitle = document.querySelector(
        '#courseTopForm > div.course-header > div:nth-child(1) > div.course-title-txt.course-view-header-txt'
    )
    if (isCourseTopPage && courseTitle) {
        // 科目名
        const courseName = courseTitle.textContent.split(' ').at(-1)

        // 「科目名 - 科目トップ」のような表示にする
        document.title = `${courseName} - ${document.title}`
    }
}
