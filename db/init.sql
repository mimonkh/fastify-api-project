--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.3

-- Started on 2025-05-01 05:05:27

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
-- TOC entry 217 (class 1259 OID 16457)
-- Name: devices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.devices (
    id bigint NOT NULL,
    device_id text NOT NULL,
    name text,
    type text,
    location text,
    is_deleted boolean DEFAULT false
);


ALTER TABLE public.devices OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16456)
-- Name: devices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.devices_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.devices_id_seq OWNER TO postgres;

--
-- TOC entry 3340 (class 0 OID 0)
-- Dependencies: 216
-- Name: devices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.devices_id_seq OWNED BY public.devices.id;


--
-- TOC entry 215 (class 1259 OID 16400)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    user_name text NOT NULL,
    email text,
    password text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16399)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 3341 (class 0 OID 0)
-- Dependencies: 214
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;


--
-- TOC entry 3179 (class 2604 OID 16460)
-- Name: devices id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices ALTER COLUMN id SET DEFAULT nextval('public.devices_id_seq'::regclass);


--
-- TOC entry 3178 (class 2604 OID 16403)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3334 (class 0 OID 16457)
-- Dependencies: 217
-- Data for Name: devices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.devices (id, device_id, name, type, location, is_deleted) FROM stdin;
3	zs5000_xxx	1	3	test	f
1	zs4000_xxx	updated	updated	updated	t
\.


--
-- TOC entry 3332 (class 0 OID 16400)
-- Dependencies: 215
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, user_name, email, password) FROM stdin;
1	Ali	ali0@example.com	\N
2	Ali	ali1@example.com	\N
3	Ali	ali2@example.com	\N
4	Ali	ali3@example.com	\N
5	Ali	ali4@example.com	\N
6	Ali	ali5@example.com	\N
7	Ali	ali6@example.com	\N
9	Ali	ali7@example.com	\N
10	Ali	al0@example.com	\N
11	Ali	al1@example.com	\N
12	Ali	al2@example.com	\N
13	Ali	al3@example.com	\N
14	Ali	al4@example.com	\N
15	Ali	al5@example.com	\N
16	Ali	al6@example.com	\N
17	Ali	al7@example.com	\N
18	Ali	al8@example.com	\N
19	Ali	al9@example.com	\N
20	Ali	al10@example.com	\N
21	Ali	al11@example.com	\N
22	Ali	al12@example.com	\N
28	Ali	al13@example.com	\N
29	test user	test@gmail.com	cc03e747a6afbbcbf8be7668acfebee5
32	test user1	test1@gmail.com	cc03e747a6afbbcbf8be7668acfebee5
35	test user1	test2@gmail.com	cc03e747a6afbbcbf8be7668acfebee5
36	test user1	test3@gmail.com	cc03e747a6afbbcbf8be7668acfebee5
\.


--
-- TOC entry 3342 (class 0 OID 0)
-- Dependencies: 216
-- Name: devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.devices_id_seq', 3, true);


--
-- TOC entry 3343 (class 0 OID 0)
-- Dependencies: 214
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 38, true);


--
-- TOC entry 3182 (class 2606 OID 16407)
-- Name: users PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- TOC entry 3184 (class 2606 OID 16443)
-- Name: users UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- TOC entry 3186 (class 2606 OID 16466)
-- Name: devices devices_device_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_device_id_key UNIQUE (device_id);


--
-- TOC entry 3188 (class 2606 OID 16464)
-- Name: devices devices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_pkey PRIMARY KEY (id);


-- Completed on 2025-05-01 05:05:27

--
-- PostgreSQL database dump complete
--

