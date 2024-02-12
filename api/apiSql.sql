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
    createdat date DEFAULT CURRENT_DATE NOT NULL
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
-- Name: projects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.projects (
)
INHERITS (public.blogs);


--
-- Name: timeline; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.timeline (
    id integer NOT NULL,
    year text NOT NULL,
    content text NOT NULL,
    "fullDate" date NOT NULL,
    "createdAt" date DEFAULT CURRENT_DATE NOT NULL
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

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq'::regclass);


--
-- Name: projects createdat; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects ALTER COLUMN createdat SET DEFAULT CURRENT_DATE;


--
-- Name: timeline id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.timeline ALTER COLUMN id SET DEFAULT nextval('public.timeline_id_seq'::regclass);


--
-- Data for Name: badges; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.badges (id, name, color) FROM stdin;
1	NLP	green
2	CS	blue
\.


--
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.blogs (id, title, userid, content, createdat) FROM stdin;
1	First Blog	1	This is the content of the first blog.	2024-02-12
2	Second Blog	2	This is the content of the second blog.	2024-02-12
3	Third Blog	1	This is the content of the third blog.	2024-02-12
4	Fourth Blog	3	This is the content of the fourth blog.	2024-02-12
5	Fifth Blog	2	This is the content of the fifth blog.	2024-02-12
\.


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.projects (id, title, userid, content, createdat) FROM stdin;
6	Project A	1	Description of Project A	2024-02-12
7	Project B	2	Description of Project B	2024-02-12
\.


--
-- Data for Name: timeline; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.timeline (id, year, content, "fullDate", "createdAt") FROM stdin;
1	2024	Some event happened	2024-02-12	2024-02-12
2	2023	Another event occurred	2023-01-01	2024-02-12
\.


--
-- Name: badges_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.badges_id_seq', 2, true);


--
-- Name: blogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.blogs_id_seq', 7, true);


--
-- Name: timeline_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.timeline_id_seq', 2, true);


--
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: timeline timeline_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.timeline
    ADD CONSTRAINT timeline_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

