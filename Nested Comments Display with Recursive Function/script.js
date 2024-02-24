const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: [],
            }
          ],
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: []
    },
];

let answers = document.querySelector(".center-block");

function generateCommentHTML(comment, nestingLevel) {
    let padding = nestingLevel * 20;
    let result = 
    `
    <div style = "padding-left: ${padding}px">
    <p>${comment.text}</p>
    </div>
    `;
    return result;
}

function appendComments(comments, nestingLevel) {
    answers.innerHTML += generateCommentHTML(comments,nestingLevel);
}

function initilizeComments(comments, nestingLevel) {
    for (let i = 0; i < comments.length; ++i) {
        appendComments(comments[i],nestingLevel);
        if (comments[i].replies !== undefined) {
            initilizeComments(comments[i].replies,nestingLevel+1);
        }
    }
}

window.addEventListener("load", function() {
    initilizeComments(comments,0);
});
