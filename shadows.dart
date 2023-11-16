import 'package:flutter/material.dart';

class AppShadows {
  static const primaryInner = BoxShadow(
    color: Color(0x59000000),
    offset: Offset(0, 0),
    blurRadius: 14,
    spreadRadius: 0,
  );

  static const primaryBox = BoxShadow(
    color: Color(0x59000000),
    offset: Offset(0, 4),
    blurRadius: 24,
    spreadRadius: 0,
  );

  static const 🚫MultiLayerShadow = BoxShadow(
    color: Color(0x59000000),
    offset: Offset(0, 0),
    blurRadius: 14,
    spreadRadius: 0,
  );

  static const hoverLargeArea = BoxShadow(
    color: Color(0x0a040a1e),
    offset: Offset(0, 4),
    blurRadius: 8,
    spreadRadius: 0,
  );

  static const popup = BoxShadow(
    color: Color(0x1a040a1e),
    offset: Offset(0, 8),
    blurRadius: 16,
    spreadRadius: 0,
  );

  static const hoverSmallArea = BoxShadow(
    color: Color(0x14040a1e),
    offset: Offset(0, 4),
    blurRadius: 8,
    spreadRadius: 0,
  );

  static const elevationShadowM = BoxShadow(
    color: Color(0x40000000),
    offset: Offset(0, 2),
    blurRadius: 6,
    spreadRadius: 0,
  );

  static const elevationShadowL = BoxShadow(
    color: Color(0x4d000000),
    offset: Offset(0, 4),
    blurRadius: 8,
    spreadRadius: 0,
  );

  AppShadows._();
}
