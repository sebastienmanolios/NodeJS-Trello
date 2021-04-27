# Roads

| URL | GET | POST | PATCH | DELETE |
|---|---|---|---|---|
| /lists | get all lists | create a list (form data) |
| /lists/:id | get a list by its id || update a list by its id | delete a list by its id |
| /cards || create a card |||
| /cards/:id | get a card by its id || update a card by its id | delete a card by its id |
| /lists/:id/cards | get all cards by a list's id ||||
| /tags| get all tags | create a tag |||
| /tags/:id ||| update a tag by its id| delete a tag by its id|
| /cards/:id/tags || add a tag to a card (by its id)|||
| /cards/:card_id/tags/:tag_id |||| delete a tag(id) by a card(id)|
