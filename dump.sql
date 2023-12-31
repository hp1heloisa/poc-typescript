PGDMP         .                {            poc-ts    14.8 (Homebrew)    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16543    poc-ts    DATABASE     j   CREATE DATABASE "poc-ts" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE "poc-ts";
                heloisa    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                heloisa    false            �            1259    16582    filmes    TABLE     �   CREATE TABLE public.filmes (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    filme text NOT NULL,
    plataforma text NOT NULL,
    genero text NOT NULL,
    status boolean DEFAULT false
);
    DROP TABLE public.filmes;
       public         heap    heloisa    false    4            �            1259    16581    filmes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.filmes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.filmes_id_seq;
       public          heloisa    false    4    212                       0    0    filmes_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.filmes_id_seq OWNED BY public.filmes.id;
          public          heloisa    false    211            �            1259    16571    usuarios    TABLE     R   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nome text NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    heloisa    false    4            �            1259    16570    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          heloisa    false    210    4                       0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          heloisa    false    209            �           2604    16585 	   filmes id    DEFAULT     f   ALTER TABLE ONLY public.filmes ALTER COLUMN id SET DEFAULT nextval('public.filmes_id_seq'::regclass);
 8   ALTER TABLE public.filmes ALTER COLUMN id DROP DEFAULT;
       public          heloisa    false    212    211    212            �           2604    16574    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          heloisa    false    209    210    210            �           2606    16590    filmes filmes_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.filmes
    ADD CONSTRAINT filmes_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.filmes DROP CONSTRAINT filmes_pkey;
       public            heloisa    false    212            �           2606    16580    usuarios usuarios_nome_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_nome_key UNIQUE (nome);
 D   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_nome_key;
       public            heloisa    false    210            �           2606    16578    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            heloisa    false    210            �           2606    16591    filmes filmes_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.filmes
    ADD CONSTRAINT "filmes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.usuarios(id) ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.filmes DROP CONSTRAINT "filmes_userId_fkey";
       public          heloisa    false    210    212    3463           