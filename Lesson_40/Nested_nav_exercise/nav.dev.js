"use strict";

var nav = [{
  name: 'Explore',
  items: [{
    name: 'Development',
    items: [{
      name: 'Web development'
    }, {
      name: 'Data science'
    }, {
      name: 'Mobile development'
    }]
  }, {
    name: 'Business',
    items: [{
      name: 'Entrepreneurship'
    }, {
      name: 'Communication'
    }, {
      name: 'Management'
    }]
  }]
}];

function renderNav(items) {
  items.forEach(function (item) {
    console.log(item.name);

    if (item.items && Array.isArray(item.items)) {
      renderNav(item.items);
    }
  });
}

renderNav(nav);