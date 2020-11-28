CREATE TABLE public.users
(
    user_id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    username text NOT NULL,
    password text NOT NULL,
    data json,
    PRIMARY KEY (user_id)
);

ALTER TABLE public.users
    OWNER to postgres;
