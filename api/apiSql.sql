--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 16.2

-- Started on 2024-02-12 18:31:39

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

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 3171 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16433)
-- Name: badges; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.badges (
    id integer NOT NULL,
    name text NOT NULL,
    color text NOT NULL
);


--
-- TOC entry 215 (class 1259 OID 16438)
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
-- TOC entry 3172 (class 0 OID 0)
-- Dependencies: 215
-- Name: badges_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.badges_id_seq OWNED BY public.badges.id;


--
-- TOC entry 216 (class 1259 OID 16439)
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
-- TOC entry 217 (class 1259 OID 16445)
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
-- TOC entry 3173 (class 0 OID 0)
-- Dependencies: 217
-- Name: blogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.blogs_id_seq OWNED BY public.blogs.id;


--
-- TOC entry 221 (class 1259 OID 16470)
-- Name: project_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.project_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 218 (class 1259 OID 16446)
-- Name: projects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.projects (
)
INHERITS (public.blogs);


--
-- TOC entry 219 (class 1259 OID 16452)
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
-- TOC entry 220 (class 1259 OID 16458)
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
-- TOC entry 3174 (class 0 OID 0)
-- Dependencies: 220
-- Name: timeline_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.timeline_id_seq OWNED BY public.timeline.id;


--
-- TOC entry 3003 (class 2604 OID 16459)
-- Name: badges id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.badges ALTER COLUMN id SET DEFAULT nextval('public.badges_id_seq'::regclass);


--
-- TOC entry 3004 (class 2604 OID 16460)
-- Name: blogs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blogs ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq'::regclass);


--
-- TOC entry 3006 (class 2604 OID 16471)
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.project_id_seq'::regclass);


--
-- TOC entry 3007 (class 2604 OID 16462)
-- Name: projects createdat; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects ALTER COLUMN createdat SET DEFAULT CURRENT_DATE;


--
-- TOC entry 3008 (class 2604 OID 16463)
-- Name: timeline id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.timeline ALTER COLUMN id SET DEFAULT nextval('public.timeline_id_seq'::regclass);


--
-- TOC entry 3158 (class 0 OID 16433)
-- Dependencies: 214
-- Data for Name: badges; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.badges (id, name, color) FROM stdin;
1	NLP	green
2	CS	blue
\.


--
-- TOC entry 3160 (class 0 OID 16439)
-- Dependencies: 216
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
-- TOC entry 3162 (class 0 OID 16446)
-- Dependencies: 218
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.projects (id, title, userid, content, createdat) FROM stdin;
6	Project A	1	Description of Project A	2024-02-12
7	Project B	2	Description of Project B	2024-02-12
\.


--
-- TOC entry 3163 (class 0 OID 16452)
-- Dependencies: 219
-- Data for Name: timeline; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.timeline (id, year, content, "fullDate", "createdAt") FROM stdin;
1	2024	Some event happened	2024-02-12	2024-02-12
2	2023	Another event occurred	2023-01-01	2024-02-12
\.


--
-- TOC entry 3175 (class 0 OID 0)
-- Dependencies: 215
-- Name: badges_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.badges_id_seq', 2, true);


--
-- TOC entry 3176 (class 0 OID 0)
-- Dependencies: 217
-- Name: blogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.blogs_id_seq', 7, true);


--
-- TOC entry 3177 (class 0 OID 0)
-- Dependencies: 221
-- Name: project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.project_id_seq', 1, false);


--
-- TOC entry 3178 (class 0 OID 0)
-- Dependencies: 220
-- Name: timeline_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.timeline_id_seq', 2, true);


--
-- TOC entry 3011 (class 2606 OID 16465)
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);


--
-- TOC entry 3013 (class 2606 OID 16467)
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- TOC entry 3015 (class 2606 OID 16469)
-- Name: timeline timeline_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.timeline
    ADD CONSTRAINT timeline_pkey PRIMARY KEY (id);


-- Completed on 2024-02-12 18:31:45

--
-- PostgreSQL database dump complete
--

