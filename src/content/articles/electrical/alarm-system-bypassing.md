---
title: "Alarm System - Bypassing"
category: electrical
subsystem: "Electrical"
author: CG
difficulty: intermediate
tools: [dme-diagnostic-adapter, durametric, multimeter]
sourceUrl: https://www.clarks-garage.com/shop-manual/elect-23.htm
description: "Sometimes engine starting and running problems can be caused by a faulty alarm module (if the car is equipped with an alarm system). Since testing the alarm …"
code: ELECT-23
---

## Introduction

Sometimes engine starting and running problems can be caused by a faulty alarm module (if the car is equipped with an alarm system). Since testing the alarm module is difficult at best, bypassing the alarm system to see if the car will start is the next best thing. This requires disconnecting the alarm module and installing two jumpers in the electrical connector plug.

## Tools

- Two wire jumpers with spade connectors

## Procedure

1. First, locate the alarm module. It's a black box approximately the size of a pack of cigarettes. On early 944s (pre-1985.5), it's located behind the radio in the back of the center console. On late model 944s, it's located behind the kick panel in the passenger's footwell near above the DME computer.
2. Disconnect the electrical plug from the alarm module.
3. Connect one jumper from Pin 1 to Pin 4 on the large module connector. Connect the second jumper from Pin 7 to Pin 8 on the large module connector.
   **Alarm Module Connector Pins**  
   ![Alarm System - Bypassing](/articles/alarm-system-bypassing/alarm-module-plug-pins.jpg)

   |  |  |  |
   | --- | --- | --- |
   | **Late 944 Alarm Module - 911.637.104.02** | | |
   | **Plug Terminal #** | **Wire Color** | **Control Unit Terminal #** |
   | 1 | Black / White (0.5 mm) | 15 |
   | 2 | Brown / Yellow (0.5 mm) | T |
   | 3 | Brown (0.5 mm) | 31 |
   | 4 | Green (0.5 mm) | 87a |
   | 5 | Yellow (0.5 mm) | E/A |
   | 6 | Brown / Black (0.5 mm) | MK |
   | 7 | Yellow / Red (0.5 mm) | 61 |
   | 8 | Blue (0.5 mm) | 61 |
   | 1 (small plug) | Black / Red (1.0 mm) | HN |
   | 2 (small plug) | Red (1.5 mm) | 30 |

   |  |  |  |
   | --- | --- | --- |
   | **Early 944 Alarm Module - 911.637.104.00** | | |
   | **Plug Terminal #** | **Wire Color** | **Control Unit Terminal #** |
   | 1 | Green | 15 |
   | 2 | Brown (2 wires) | T |
   | 3 | Brown / White | 31 |
   | 4 | Black | K1 |
   | 5 | Blue | E/A |
   | 6 | Blue / White | MK |
   | 7 | Brown / Black | 61 |
   | 8 | Brown / Red | 61 |
   | 1 | Red / Yellow | HN |
   | 2 | Red | 30 |

   **Late Alarm Module Wiring Diagram**

   ![Alarm System - Bypassing](/articles/alarm-system-bypassing/alarm-module-jumper.jpg)

   ![Alarm System - Bypassing](/articles/alarm-system-bypassing/alarm-jumper-1.jpg)![Alarm System - Bypassing](/articles/alarm-system-bypassing/alarm-jumper-2.jpg)![Alarm System - Bypassing](/articles/alarm-system-bypassing/alarm-jumper-3.jpg)
4. Attempt to start the vehicle to verify that the alarm bypass was successful. If the jumpers were installed to troubleshoot a "no start" condition and the car still does not start, the alarm module is not the problem.
