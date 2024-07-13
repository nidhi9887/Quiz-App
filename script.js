const questions=[
  {
    question:"Which is the largest animal in the world",
    answer:[
      {text:"shark",correct:false},
      {text:"Blue Whale",correct:true},
      {text:"Girafffe",correct:false},
      {text:"Elephant",correct:false}
    ]
  },{question:"Which is the smallest continent in the world",
  answer:[
    {text:"Africa",correct:false},
    {text:"Arctic",correct:false},
    {text:"Australia",correct:true},
    {text:"Asia",correct:false}
  ]

  },{
    question:"Which is the largest desert in the world",
    answer:[
      {text:"Kalahari",correct:false},
      {text:"Sahara",correct:true},
      {text:"Gobi",correct:false},
      {text:"Antartica",correct:false}
    ]
  },{
    question:"Which is the smallest country in the world",
    answer:[
      {text:"vetican city",correct:true},
      {text:"Nepal",correct:false},
      {text:"India",correct:false},
      {text:"Elephant",correct:false}
    ]
  }
];
const questionElement=document.getElementById("question");
const  answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");