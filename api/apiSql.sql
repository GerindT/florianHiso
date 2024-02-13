--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: badges; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.badges (
    id integer NOT NULL,
    name text NOT NULL,
    color text NOT NULL
);


--
-- Name: badges_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.badges_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: badges_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.badges_id_seq OWNED BY public.badges.id;


--
-- Name: blogs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.blogs (
    id integer NOT NULL,
    title text NOT NULL,
    userid integer NOT NULL,
    content text NOT NULL,
    createdat date DEFAULT CURRENT_DATE NOT NULL,
    tags json NOT NULL
);


--
-- Name: blogs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.blogs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: blogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.blogs_id_seq OWNED BY public.blogs.id;


--
-- Name: project_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.project_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: projects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    title text NOT NULL,
    userid integer NOT NULL,
    content text NOT NULL,
    createdat date DEFAULT CURRENT_DATE NOT NULL,
    url text NOT NULL,
    tags json NOT NULL
);


--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: timeline; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.timeline (
    id integer NOT NULL,
    year text NOT NULL,
    content text NOT NULL,
    "fullDate" date NOT NULL,
    "createdAt" date DEFAULT CURRENT_DATE NOT NULL,
    "left" smallint DEFAULT 0 NOT NULL,
    "right" smallint DEFAULT 0 NOT NULL
);


--
-- Name: timeline_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.timeline_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: timeline_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.timeline_id_seq OWNED BY public.timeline.id;


--
-- Name: badges id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.badges ALTER COLUMN id SET DEFAULT nextval('public.badges_id_seq'::regclass);


--
-- Name: blogs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blogs ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq'::regclass);


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Name: timeline id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.timeline ALTER COLUMN id SET DEFAULT nextval('public.timeline_id_seq'::regclass);


--
-- Data for Name: badges; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.badges (id, name, color) FROM stdin;
3	Computer Vision	badge-accent
4	PHP	badge-dark
5	WORD	badge-info
6	EXEL	badge-warning
1	NLP	badge-primary
2	CS	badge-secondary
\.


--
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.blogs (id, title, userid, content, createdat, tags) FROM stdin;
1	First Blog	1	This is the content of the first blog.	2024-02-12	{   "NLP":"badge-info",\r\n   "ML":"badge-success",\r\n   "AI":"badge-warning"}
2	Second Blog	2	This is the content of the second blog.	2024-02-12	{   "NLP":"badge-info",\r\n   "ML":"badge-success",\r\n   "AI":"badge-warning"}
3	Third Blog	1	This is the content of the third blog.	2024-02-12	{   "NLP":"badge-info",\r\n   "ML":"badge-success",\r\n   "AI":"badge-warning"}
4	Fourth Blog	3	This is the content of the fourth blog.	2024-02-12	{   "NLP":"badge-info",\r\n   "ML":"badge-success",\r\n   "AI":"badge-warning"}
5	Fifth Blog	2	This is the content of the fifth blog.	2024-02-12	{   "NLP":"badge-info",\r\n   "ML":"badge-success",\r\n   "AI":"badge-warning"}
\.


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.projects (id, title, userid, content, createdat, url, tags) FROM stdin;
2	Project 2 	1	Mikajlli	2024-02-13	https://github.com/FlorianHiso18	{\r\n   "NLP":"badge-info",\r\n   "ML":"badge-success",\r\n   "AI":"badge-warning"\r\n}\r\n
3	Project 3	1	Kur do mi cosh content Florian Hisa	2024-02-13	https://github.com/FlorianHiso18	 {  "NLP":"badge-info",\r\n   "ML":"badge-success",\r\n   "AI":"badge-warning"}
1	Project 1	1	\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis efficitur libero. Praesent nec velit eu nisl ultricies elementum sit amet vel ipsum. Fusce ultrices risus vel nulla sodales, eget mattis turpis tempor. Vivamus sagittis feugiat arcu nec vulputate. Phasellus eget tellus sapien. Quisque condimentum nulla nec massa facilisis, sit amet consectetur sapien tempus. Proin rhoncus laoreet augue nec tempor. Proin eu mauris et dui congue congue et ac elit.\r\n\r\nCras faucibus orci et metus pulvinar, sed malesuada eros molestie. Sed luctus arcu non mattis auctor. Maecenas eu elit elementum, pharetra nunc sed, mattis sem. Cras rutrum sagittis nisi feugiat venenatis. Phasellus ac consequat neque, eget sodales nibh. Vestibulum nec eros vel arcu eleifend suscipit ac eget nunc. Ut at justo ac velit imperdiet lobortis facilisis et orci. Nunc sit amet velit a quam gravida volutpat. Phasellus sit amet purus malesuada felis aliquam hendrerit in at justo. Donec placerat scelerisque neque et faucibus. Nulla vitae aliquam odio, id molestie est.\r\n\r\nVestibulum hendrerit leo lacus, ac scelerisque eros porttitor non. Vestibulum nulla tellus, laoreet vel velit nec, convallis malesuada ex. Nunc tristique viverra maximus. Cras congue condimentum elit in eleifend. Mauris nec mi sit amet nunc lacinia cursus. In quis faucibus turpis, id iaculis metus. Suspendisse fringilla nisl sit amet risus rutrum dapibus. Integer enim lorem, pretium malesuada metus non, feugiat vehicula tortor. Fusce tempor suscipit ultricies. Nunc mollis arcu nec elementum tempus. Quisque bibendum felis vitae dolor accumsan, tempor aliquet eros blandit.\r\n\r\nEtiam dictum vestibulum nulla ut iaculis. Ut nec nisi sollicitudin, cursus enim ac, ornare nunc. Proin non erat mauris. Phasellus eu felis in nisl mattis molestie. Donec laoreet dapibus turpis, nec pharetra urna. Vestibulum aliquam dolor vitae justo luctus, at scelerisque nulla fringilla. Etiam vel turpis ac tortor accumsan molestie sit amet non diam. Nam non sagittis erat. Nullam vitae neque eget lorem gravida commodo ut sed metus. Nulla quis est efficitur, facilisis quam eu, commodo mi.\r\n\r\nMaecenas maximus auctor arcu, quis feugiat odio. Etiam id leo pretium, egestas ligula quis, iaculis orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec molestie lorem sapien, vitae varius eros vestibulum eu. Aenean ut lectus ut erat rutrum rhoncus at sit amet erat. Morbi porttitor mattis ante, at sagittis tellus imperdiet pulvinar. Nunc id nibh et arcu pharetra luctus. Curabitur vulputate mollis purus id rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis efficitur libero. Praesent nec velit eu nisl ultricies elementum sit amet vel ipsum. Fusce ultrices risus vel nulla sodales, eget mattis turpis tempor. Vivamus sagittis feugiat arcu nec vulputate. Phasellus eget tellus sapien. Quisque condimentum nulla nec massa facilisis, sit amet consectetur sapien tempus. Proin rhoncus laoreet augue nec tempor. Proin eu mauris et dui congue congue et ac elit. Cras faucibus orci et metus pulvinar, sed malesuada eros molestie. Sed luctus arcu non mattis auctor. Maecenas eu elit elementum, pharetra nunc sed, mattis sem. Cras rutrum sagittis nisi feugiat venenatis. Phasellus ac consequat neque, eget sodales nibh. Vestibulum nec eros vel arcu eleifend suscipit ac eget nunc. Ut at justo ac velit imperdiet lobortis facilisis et orci. Nunc sit amet velit a quam gravida volutpat. Phasellus sit amet purus malesuada felis aliquam hendrerit in at justo. Donec placerat scelerisque neque et faucibus. Nulla vitae aliquam odio, id molestie est. Vestibulum hendrerit leo lacus, ac scelerisque eros porttitor non. Vestibulum nulla tellus, laoreet vel velit nec, convallis malesuada ex. Nunc tristique viverra maximus. Cras congue condimentum elit in eleifend. Mauris nec mi sit amet nunc lacinia cursus. In quis faucibus turpis, id iaculis metus. Suspendisse fringilla nisl sit amet risus rutrum dapibus. Integer enim lorem, pretium malesuada metus non, feugiat vehicula tortor. Fusce tempor suscipit ultricies. Nunc mollis arcu nec elementum tempus. Quisque bibendum felis vitae dolor accumsan, tempor aliquet eros blandit. Etiam dictum vestibulum nulla ut iaculis. Ut nec nisi sollicitudin, cursus enim ac, ornare nunc. Proin non erat mauris. Phasellus eu felis in nisl mattis molestie. Donec laoreet dapibus turpis, nec pharetra urna. Vestibulum aliquam dolor vitae justo luctus, at scelerisque nulla fringilla. Etiam vel turpis ac tortor accumsan molestie sit amet non diam. Nam non sagittis erat. Nullam vitae neque eget lorem gravida commodo ut sed metus. Nulla quis est efficitur, facilisis quam eu, commodo mi. Maecenas maximus auctor arcu, quis feugiat odio. Etiam id leo pretium, egestas ligula quis, iaculis orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec molestie lorem sapien, vitae varius eros vestibulum eu. Aenean ut lectus ut erat rutrum rhoncus at sit amet erat. Morbi porttitor mattis ante, at sagittis tellus imperdiet pulvinar. Nunc id nibh et arcu pharetra luctus. Curabitur vulputate mollis purus id rutrum.  	2024-02-13	https://github.com/FlorianHiso18	{   "NLP":"badge-info",\r\n   "ML":"badge-success",\r\n   "AI":"badge-warning"}
\.


--
-- Data for Name: timeline; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.timeline (id, year, content, "fullDate", "createdAt", "left", "right") FROM stdin;
1	2024	Some event happened	2024-02-12	2024-02-12	0	0
3	2022	Idk What happend	2022-01-12	2024-02-13	1	1
4	2021	I was Drunk	2021-09-01	2024-02-13	1	1
5	2020	I was fapping	2020-01-10	2024-02-13	1	1
6	2019	Traps aren't gay ;)	2019-05-05	2024-02-13	0	1
2	2023	Another event occurred	2023-01-01	2024-02-12	1	1
\.


--
-- Name: badges_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.badges_id_seq', 6, true);


--
-- Name: blogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.blogs_id_seq', 7, true);


--
-- Name: project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.project_id_seq', 1, false);


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.projects_id_seq', 3, true);


--
-- Name: timeline_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.timeline_id_seq', 6, true);


--
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);


--
-- Name: projects projects_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pk PRIMARY KEY (id);


--
-- Name: timeline timeline_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.timeline
    ADD CONSTRAINT timeline_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

