// vi. line-item
// 1) list()
//     a) /requestlinesforrequest/:id GET
//     b) used by request-detail, request-edit, and review-detail
// 2) get()
//     a) /requestlines/:id GET
//     b) used by line-item-detail
//         a) We have not created this yet
// 3) save()
//     a) /requestlines POST
//     b) used by line-item-create
//         a) We have not created this yet
// 4) update()
//     a) /requestlines/:id PUT
//     b) used by line-item-edit
//         a) We have not created this yet
// 5) delete()
//     a) /requestlines/:id DELETE
//     b) in html click of the button should call delete()
//     c) used by line-item-edit and line-item-list
//         a) We have not created these yet