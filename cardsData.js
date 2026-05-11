var cardsData = {
    spades: [
      { id: "s2", title: "2 of Spades", img: "assets/cards/spade/2.png", desc: "Unlocks machine cogs", cost: 2500 },
      { id: "s3", title: "3 of Spades", img: "assets/cards/spade/3.png", desc: "A solid choice.", cost: 0 },
      { id: "s4", title: "4 of Spades", img: "assets/cards/spade/4.png", desc: "Perfect for a full set.", cost: 0 },
      { id: "s5", title: "5 of Spades", img: "assets/cards/spade/5.png", desc: "Increases card income.", cost: 0 },
      { id: "s6", title: "6 of Spades", img: "assets/cards/spade/6.png", desc: "Good synergy.", cost: 0 },
      { id: "s7", title: "7 of Spades", img: "assets/cards/spade/7.png", desc: "Increases crit chance.", cost: 0 },
      { id: "s8", title: "8 of Spades", img: "assets/cards/spade/8.png", desc: "Lucky number 8.", cost: 0 },
      { id: "s9", title: "9 of Spades", img: "assets/cards/spade/9.png", desc: "Better than average.", cost: 0 },
      { id: "s10", title: "10 of Spades", img: "assets/cards/spade/10.png", desc: "Close to the jack.", cost: 0 },
      { id: "sj", title: "Jack of Spades", img: "assets/cards/spade/j.png", desc: "A royal figure.", cost: 0 },
      { id: "sq", title: "Queen of Spades", img: "assets/cards/spade/q.png", desc: "Queen effect active.", cost: 0 },
      { id: "sk", title: "King of Spades", img: "assets/cards/spade/k.png", desc: "Rule the realm.", cost: 0 },
      { id: "s_ace", title: "Ace of Spades", img: "assets/cards/spade/ace.png", desc: "The highest card in the deck.", cost: 0 }
    ],
    diamonds: [
      { id: "d2", title: "2 of Diamonds", img: "assets/cards/diamond/2.png", desc: "Shiny diamond.", cost: 0 },
      { id: "d3", title: "3 of Diamonds", img: "assets/cards/diamond/3.png", desc: "Multiplies your multipliers.", cost: 0 },
      { id: "d4", title: "4 of Diamonds", img: "assets/cards/diamond/4.png", desc: "Standard and reliable.", cost: 0 },
      { id: "d5", title: "5 of Diamonds", img: "assets/cards/diamond/5.png", desc: "Gleaming.", cost: 0 },
      { id: "d6", title: "6 of Diamonds", img: "assets/cards/diamond/6.png", desc: "Sparkling.", cost: 0 },
      { id: "d7", title: "7 of Diamonds", img: "assets/cards/diamond/7.png", desc: "Lucky 7 diamond.", cost: 0 },
      { id: "d8", title: "8 of Diamonds", img: "assets/cards/diamond/8.png", desc: "Richer stats.", cost: 0 },
      { id: "d9", title: "9 of Diamonds", img: "assets/cards/diamond/9.png", desc: "Brilliant.", cost: 0 },
      { id: "d10", title: "10 of Diamonds", img: "assets/cards/diamond/10.png", desc: "Full house potential.", cost: 0 },
      { id: "dj", title: "Jack of Diamonds", img: "assets/cards/diamond/j.png", desc: "Valuable.", cost: 0 },
      { id: "dq", title: "Queen of Diamonds", img: "assets/cards/diamond/q.png", desc: "Rich royalty.", cost: 0 },
      { id: "dk", title: "King of Diamonds", img: "assets/cards/diamond/k.png", desc: "Master of gems.", cost: 0 },
      { id: "d_ace", title: "Ace of Diamonds", img: "assets/cards/diamond/ace.png", desc: "The gem of aces.", cost: 0 }
    ],
    hearts: [
      { id: "h2", title: "2 of Hearts", img: "assets/cards/heart/2.png", desc: "A loving start.", cost: 0 },
      { id: "h3", title: "3 of Hearts", img: "assets/cards/heart/3.png", desc: "Triple the love.", cost: 0 },
      { id: "h4", title: "4 of Hearts", img: "assets/cards/heart/4.png", desc: "Warmth and comfort.", cost: 0 },
      { id: "h5", title: "5 of Hearts", img: "assets/cards/heart/5.png", desc: "A gentle boost.", cost: 0 },
      { id: "h6", title: "6 of Hearts", img: "assets/cards/heart/6.png", desc: "Caring effect.", cost: 0 },
      { id: "h7", title: "7 of Hearts", img: "assets/cards/heart/7.png", desc: "Deep affection.", cost: 0 },
      { id: "h8", title: "8 of Hearts", img: "assets/cards/heart/8.png", desc: "Lovely stats.", cost: 0 },
      { id: "h9", title: "9 of Hearts", img: "assets/cards/heart/9.png", desc: "Intense love.", cost: 0 },
      { id: "h10", title: "10 of Hearts", img: "assets/cards/heart/10.png", desc: "Full of love.", cost: 0 },
      { id: "hj", title: "Jack of Hearts", img: "assets/cards/heart/j.png", desc: "Royal love.", cost: 0 },
      { id: "hq", title: "Queen of Hearts", img: "assets/cards/heart/q.png", desc: "Queen of hearts.", cost: 0 },
      { id: "hk", title: "King of Hearts", img: "assets/cards/heart/k.png", desc: "King of hearts.", cost: 0 },
      { id: "h_ace", title: "Ace of Hearts", img: "assets/cards/heart/ace.png", desc: "The ace of hearts.", cost: 0 }
    ],
    clubs: [
      { id: "c2", title: "2 of Clubs", img: "assets/cards/club/2.png", desc: "A sturdy clover.", cost: 0 },
      { id: "c3", title: "3 of Clubs", img: "assets/cards/club/3.png", desc: "Tri-leaf bonus.", cost: 0 },
      { id: "c4", title: "4 of Clubs", img: "assets/cards/club/4.png", desc: "Fortunate.", cost: 0 },
      { id: "c5", title: "5 of Clubs", img: "assets/cards/club/5.png", desc: "A little extra luck.", cost: 0 },
      { id: "c6", title: "6 of Clubs", img: "assets/cards/club/6.png", desc: "Lucky six.", cost: 0 },
      { id: "c7", title: "7 of Clubs", img: "assets/cards/club/7.png", desc: "Highly fortunate.", cost: 0 },
      { id: "c8", title: "8 of Clubs", img: "assets/cards/club/8.png", desc: "Lucky eight.", cost: 0 },
      { id: "c9", title: "9 of Clubs", img: "assets/cards/club/9.png", desc: "Strong clover.", cost: 0 },
      { id: "c10", title: "10 of Clubs", img: "assets/cards/club/10.png", desc: "Ten leaf clover.", cost: 0 },
      { id: "cj", title: "Jack of Clubs", img: "assets/cards/club/j.png", desc: "Valuable clover.", cost: 0 },
      { id: "cq", title: "Queen of Clubs", img: "assets/cards/club/q.png", desc: "Queen of the field.", cost: 0 },
      { id: "ck", title: "King of Clubs", img: "assets/cards/club/k.png", desc: "King of the field.", cost: 0 },
      { id: "c_ace", title: "Ace of Clubs", img: "assets/cards/club/ace.png", desc: "The lucky ace.", cost: 0 }
    ]
  };
  
  function getCardById(cardId) {
    for (var family in cardsData) {
      var card = cardsData[family].find(function(c) {
        return c.id === cardId;
      });
      if (card) return card;
    }
    return null;
  }

  document.addEventListener("DOMContentLoaded", function() {
    var allCardSlots = document.querySelectorAll(".card-slot");
    
    allCardSlots.forEach(function(slot) {
      slot.classList.add("locked-card");
    });
  
    if (typeof purchasedCards !== 'undefined') {
      purchasedCards.forEach(function(cardId) {
        var cardElement = document.querySelector(`[onclick*="${cardId}"]`);
        if (cardElement) {
          cardElement.classList.remove("locked-card");
        }
      });
    }
  });