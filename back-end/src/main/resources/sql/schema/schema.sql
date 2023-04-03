# drop table if exists address;

drop table if exists carousel;

drop table if exists cart;

drop table if exists orders;

drop table if exists refresh_token;

drop table if exists review;

drop table if exists member;

drop table if exists product;

create table member
(
    id       bigint auto_increment
        primary key,
    birth    date         not null,
    email    varchar(30) not null,
    name     varchar(20) not null,
    password varchar(255) not null,
    phone    varchar(13) not null,
    role     varchar(20) not null
);

# create table address
# (
#     id        bigint auto_increment
#         primary key,
#     info      varchar(255) not null,
#     recipient varchar(255) not null,
#     zip_code  varchar(255) not null,
#     member_id bigint       not null,
#     constraint FKcnw0s8hudme00qu71e3mqd5ih
#         foreign key (member_id) references member (id)
# );

create table product
(
    id       bigint auto_increment
        primary key,
    category varchar(10) not null,
    image    mediumblob   not null,
    info     varchar(255) not null,
    name     varchar(100) not null,
    price    int          not null,
    stock    int          not null,
    target   varchar(10) not null
);

create table carousel
(
    id         bigint auto_increment
        primary key,
    img        mediumblob not null,
    product_id bigint     null,
    constraint FK9hiv8qdv4e2gneckfn318qx3r
        foreign key (product_id) references product (id)
);

create table cart
(
    id         bigint auto_increment
        primary key,
    checked    bit    not null,
    quantity   int    not null,
    member_id  bigint not null,
    product_id bigint not null,
    constraint FK3d704slv66tw6x5hmbm6p2x3u
        foreign key (product_id) references product (id),
    constraint FKix170nytunweovf2v9137mx2o
        foreign key (member_id) references member (id)
);

create table orders
(
    id           bigint auto_increment
        primary key,
    date         date         not null,
    quantity     int          not null,
    order_status varchar(20) not null,
    member_id    bigint       not null,
    product_id   bigint       not null,
    constraint FK787ibr3guwp6xobrpbofnv7le
        foreign key (product_id) references product (id),
    constraint FKpktxwhj3x9m4gth5ff6bkqgeb
        foreign key (member_id) references member (id)
);

create table refresh_token
(
    rt_key   varchar(255) not null
        primary key,
    rt_value varchar(255) not null
);

create table review
(
    id         bigint auto_increment
        primary key,
    content    varchar(250) null,
    image      mediumblob   not null,
    member_id  bigint       not null,
    product_id bigint       not null,
    constraint FK11khguugixv7x8xw8gj99ph6m
        foreign key (product_id) references product (id),
    constraint FKqjum51a6dqt9boojdj2jm1dpg
        foreign key (member_id) references member (id)
);
