-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-08-2019 a las 19:11:15
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdhitzone`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `paterno` varchar(50) NOT NULL,
  `materno` varchar(50) NOT NULL,
  `edad` int(20) NOT NULL,
  `bdate` varchar(30) NOT NULL,
  `sexo` varchar(50) NOT NULL,
  `nac` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `e_name` varchar(50) NOT NULL,
  `e_rel` varchar(50) NOT NULL,
  `e_phone` varchar(30) NOT NULL,
  `c_name` varchar(50) NOT NULL,
  `c_rel` varchar(50) NOT NULL,
  `c_phone` varchar(30) NOT NULL,
  `other` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `customer`
--

INSERT INTO `customer` (`id`, `name`, `paterno`, `materno`, `edad`, `bdate`, `sexo`, `nac`, `email`, `phone`, `e_name`, `e_rel`, `e_phone`, `c_name`, `c_rel`, `c_phone`, `other`, `created_at`, `updated_at`) VALUES
(2, 'Veronica Cash', 'Iste duis Nam est si', 'Velit tempora velit ', 22, '1975-05-07', 'Quia illo anim aliqu', 'Nihil deleniti minus', 'vivyxi@mailinator.net', '+1 (533) 847-5334', 'Paki Rosario', 'Sit eum ad error rep', '+1 (979) 433-7883', 'Hunter Roth', 'Recusandae Mollitia', '+1 (641) 137-5222', 'Id omnis enim volupt', '2019-08-17 05:26:16', '2019-08-17 05:35:48'),
(11, 'Arthur Morrow', 'Corporis excepteur e', 'In dolorem exercitat', 0, '1988-02-01', 'Rerum id repellendus', 'Incidunt exercitati', 'tusid@mailinator.com', '+1 (373) 116-1834', 'Colt Roberson', 'Possimus aliquam iu', '+1 (593) 476-3935', 'Hayley Church', 'Iste iure accusantiu', '+1 (559) 638-1422', 'Illo vel enim est qu', '2019-08-17 05:27:01', '2019-08-17 05:35:48');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
