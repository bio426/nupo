create table wishlist(
  user_id integer references users,
  product_id integer references products 
);

---- create above / drop below ----

drop table wishlist;
