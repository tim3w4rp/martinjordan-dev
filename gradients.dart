import 'package:flutter/material.dart';

class AppGradients {
  static const ocean = LinearGradient(
    begin: Alignment(0, -2.220446049250313e-16),
    end: Alignment(0, 0.9999999999999998),
    stops: [
      0,
      1,
    ],
    colors: [
    Color(0xff0368ff),
    Color(0xff10e7e2),
    ],
  );

  static const sunrise = LinearGradient(
    begin: Alignment(-1, -1),
    end: Alignment(1, 1),
    stops: [
      0,
      0.3698000013828278,
      1,
    ],
    colors: [
    Color(0xffca7cd8),
    Color(0xffff68a8),
    Color(0xfff9eb0f),
    ],
  );

  static const multilayerGradient = LinearGradient(
    begin: Alignment(0, -2.220446049250313e-16),
    end: Alignment(0, 0.9999999999999998),
    stops: [
      0,
      1,
    ],
    colors: [
    Color(0xff00ffff),
    Color(0xffffff00),
    ],
  );

  static const brandingTwilight = LinearGradient(
    begin: Alignment(-0.9999999999999991, -1),
    end: Alignment(1, -0.9999999999999964),
    stops: [
      0,
      1,
    ],
    colors: [
    Color(0xff19426c),
    Color(0xff2c1f56),
    ],
  );

  static const brandingNavigation = LinearGradient(
    begin: Alignment(-0.9999999999999991, -1),
    end: Alignment(1, -0.9999999999999964),
    stops: [
      0,
      1,
    ],
    colors: [
    Color(0xff19426c),
    Color(0xff2c1f56),
    ],
  );

  static const specialBlanketGradient = LinearGradient(
    begin: Alignment(0, -0.9999999999999999),
    end: Alignment(0, 1),
    stops: [
      0,
      1,
    ],
    colors: [
    Color(0x52141618),
    Color(0x00141618),
    ],
  );

  static const specialFade = LinearGradient(
    begin: Alignment(-1, 0),
    end: Alignment(1, 0),
    stops: [
      0,
      1,
    ],
    colors: [
    Color(0x00ffffff),
    Color(0xffffffff),
    ],
  );

  AppGradients._();
}
