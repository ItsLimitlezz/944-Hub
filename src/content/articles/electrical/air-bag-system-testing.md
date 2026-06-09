---
title: "Air Bag System Testing"
category: electrical
subsystem: "Electrical"
author: CG
difficulty: intermediate
sourceUrl: https://www.clarks-garage.com/shop-manual/elect-14.htm
description: "The information in this procedure comes from the Porsche factory airbag system diagnostics procedure. Personally, I have not had the opportunity to use this …"
code: ELECT-14
---

## Introduction

The information in this procedure comes from the Porsche factory airbag system diagnostics procedure. Personally, I have not had the opportunity to use this procedure yet. So, for now, we have to assume that the factory procedure works as written. If you attempt to use this procedure and determine that changes need to be made, please let me know.

The airbag system has an internal diagnostics system which continuously monitors the condition of the system. Any faults in the system are indicated by an "Airbag" warning light on the instrument cluster. When the ignition is turned on and when the engine is started, the "Airbag" light illuminates and remains lit for 5 seconds. If no faults in the system are detected, the "Airbag" light will then extinguish.

Testing the air bag system will require you to make up a test rig to apply a ground to the air bag test connector. The Air Bag Warning Light Reset procedure ([ELECT-12](/manual/electrical/air-bag-warning-light-reset)) contains instructions for fabricating the test rig.

After the ground is applied to the test connector, the "Airbag" light will blink in a series of codes to indicate the faults stored in the system's memory. It takes approximately 2 minutes to detect all faults once the test is started. Therefore, the ignition switch must be on for at least 2 minutes during the test.

## Tools

- Improvised Test Rig
- Pen and paper for recording fault codes

## Procedure

1. Turn the ignition switch off.
2. Connect the test rig from the airbag molex test connector to ground.
3. Depress and hold the switch/pushbutton on the test.
4. Turn the ignition switch on.
5. Release the test rig pushbutton 3 seconds after the ignition switch is turned on.
6. Count and record the lamp blink codes. The lamp blink codes will run as follows:
   1. 5 second lamp test.
   2. Light flashes 1 or more times depending on the number of faults.
   3. After 3 seconds the fault codes will start.
   4. Light flashes 1 to 4 times to indicate the fault code group.
   5. 3 second pause.
   6. Light flashes 1 to 4 times to indicate the line in the fault table.
   7. 3 second pause.
   8. Light flashes 1 to 4 times to indicate the column in the fault table.
   9. 3 second pause.
   10. Light flashes 1 or 2 times.
       1. 1 = Short-time fault
       2. 2 = Long-time fault
   11. 3 second pause.
   12. Next fault code sequence starts.
   13. Air bag light remains lit at the end of the test.
7. Using the lamp code table, determine the system faults and take corrective actions as described in the "Correcting Faults" section.
8. After all testing is complete and all faults have been corrected, reset the airbag warning light ([ELECT-12](/manual/electrical/air-bag-warning-light-reset)).

The flash code test may be repeated as often as desired.

## Lamp Code Table

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Air Bag System Lamp Codes** | | | | | |
| - | | | | | |
| **Group 1** | | | | | **Line** |
| - | 01 | 11 | 21 | 31 | **1** |
| - | 05 | - | 25 | - | **2** |
| - | 09 | 19 | 29 | - | **3** |
| - | 0D | 1D | 2D | - | **4** |
| **Column** | **1** | **2** | **3** | **4** | - |
| - | | | | | |
| **Group 2** | | | | | **Line** |
| - | 02 | 12 | 22 | 32 | **1** |
| - | 06 | - | 26 | - | **2** |
| - | 0A | 1A | 2A | - | **3** |
| - | 0E | 1E | 2E | - | **4** |
| **Column** | **1** | **2** | **3** | **4** | - |
| - | | | | | |
| **Group 3** | | | | | **Line** |
| - | 03 | 13 | 23 | 33 | **1** |
| - | 07 | 17 | 27 | - | **2** |
| - | 0B | 1B | 2B | - | **3** |
| - | - | 1F | 2F | - | **4** |
| **Column** | **1** | **2** | **3** | **4** | - |
| - | | | | | |
| **Group 4** | | | | | **Line** |
| - | 04 | 14 | 24 | 34 | **1** |
| - | 08 | 18 | 28 | - | **2** |
| - | 0C | 1C | 2C | - | **3** |
| - | - | 20 | 30 | - | **4** |
| **Column** | **1** | **2** | **3** | **4** | - |

## Air Bag Fault Codes

|  |  |  |
| --- | --- | --- |
| **Fault Code Table** | | |
| **Hex-Code** | **Fault Description** | **Fault** |
| 01 | Front Sensor Left | Closed 1 time |
| 02 | Front Sensor Left | Closed several times |
| 03 | Front Sensor Right | Closed 1 time |
| 04 | Front Sensor Right | Closed several times |
| 05 | Front Sensor Left | Closed permanently |
| 06 | Front Sensor Right | Closed permanently |
| 07 | Front Sensor Lead Left | Leaks against positive |
| 08 | Front Sensor Lead Right | Leaks against positive |
| 09 | Front Sensor Lead Left | Leaks against ground |
| 0A | Front Sensor Lead Right | Leaks against ground |
| OB | Front Sensor Lead Left | Short circuit against positive |
| OC | Front Sensor Lead Right | Short circuit against positive |
| OD | Front Sensor Lead Left | Short circuit against ground |
| OE | Front Sensor Lead Right | Short circuit against ground |
| 11 | Front Sensor Lead Left | Break |
| 12 | Front Sensor Lead Right | Break |
| 13 | Front Sensor Lead Left | Excessive resistance |
| 14 | Front Sensor Lead Right | Excessive resistance |
| 17 | Ignition Capacitor 1 | Insufficient capacitance |
| 18 | Ignition Capacitor 2 | Insufficient capacitance |
| 19 | Transition resistance to ignition capacitor 1 | Excessive |
| 1A | Transition resistance to ignition capacitor 1 | Excessive |
| 1B | Ignition Pill Circuit 1 | Leak against positive |
| 1C | Ignition Pill Circuit 2 | Leak against positive |
| 1D | Ignition Pill Circuit 3 | Leak against positive |
| 1E | Ignition Pill Circuit 1 | Short circuit against positive |
| 1F | Ignition Pill Circuit 2 | Short circuit against positive |
| 20 | Ignition Pill Circuit 3 | Short circuit against positive |
| 21 | Ignition Pill Circuit 1 | Leak against ground |
| 22 | Ignition Pill Circuit 2 | Leak against ground |
| 23 | Ignition Pill Circuit 3 | Leak against ground |
| 24 | Ignition Pill Circuit 1 | Short circuit against ground |
| 25 | Ignition Pill Circuit 2 | Short circuit against ground |
| 26 | Ignition Pill Circuit 3 | Short circuit against ground |
| 27 | Ignition Pill Circuit 1 | Break |
| 28 | Ignition Pill Circuit 2 | Break |
| 29 | Ignition Pill Circuit 3 | Break |
| 2A | Ignition Pill Circuit 1 | Insufficient resistance |
| 2B | Ignition Pill Circuit 2 | Insufficient resistance |
| 2C | Ignition Pill Circuit 3 | Insufficient resistance |
| 2D | Ignition Pill Circuit 1 | Excessive resistance |
| 2E | Ignition Pill Circuit 2 | Excessive resistance |
| 2F | Ignition Pill Circuit 3 | Excessive resistance |
| 30 | Failure Warning Lamp | Short circuit |
| 31 | Failure Warning Lamp | Broken filament |
| 32 | Control Unit | Internal fault |
| 33 | Firing Order Correct | - |
| 34 | Ignition Current Flowed | - |

Ignition pill circuit 1: Driver's airbag  
Ignition pill circuits 2 and 3: Passenger's airbag

## Correcting Faults

## Faults 01 to 06

Replace left or right front sensor.

## Faults 07 to 0E

Check front sensor with ohmmeter.

1. Terminals 1 and 2 reading: 10 kOhm.
2. Terminals 2 and 3 reading: 0 Ohm.

If correct readings are obtained, erase the fault memory. If the fault is still present, replace the control unit. If the correct readings are not obtained, replace the front sensor.

## Fault 11 or 12

Check front sensor plug connection for correct tightness.

Check front sensor with ohmmeter (see Faults 07 to 0E).

If ohmmeter shows infinite resistance (∞ Ohm) for point 1 or 2, replace the front sensor. If the readings are obtained, replace the control unit.

## Fault 13 or 14

Check front sensor with ohmmeter (see Faults 07 to 0E).

If front sensor checks okay, replace control unit.

## Faults 17 to 1A

Replace control unit.

## Faults 1B, 1E, 21, 24

Try installing new contact unit.

Attempt to reset airbag warning light ([ELECT-12](/manual/electrical/air-bag-warning-light-reset)) and then turn the ignition on.

If fault is still present, try installing an airbag unit.

Attempt to reset airbag warning light ([ELECT-12](/manual/electrical/air-bag-warning-light-reset)) and then turn the ignition on.

If fault is still present, replace control unit.

## Faults 1C, 1D, 1F, 20, 22, 23, 25, 26

Try installing a new airbag unit.

Attempt to reset airbag warning light ([ELECT-12](/manual/electrical/air-bag-warning-light-reset)) and then turn the ignition on.

If fault is still present, replace control unit.

## Fault 27

Check tightness of plug connection to airbag unit.

Check tightness of plug connection to contact unit.

If plug connections are tight, try installing a new contact unit.

Attempt to reset airbag warning light ([ELECT-12](/manual/electrical/air-bag-warning-light-reset)) and then turn the ignition on.

If fault is still present, try installing an airbag unit.

Attempt to reset airbag warning light ([ELECT-12](/manual/electrical/air-bag-warning-light-reset)) and then turn the ignition on.

If fault is still present, replace control unit.

## Fault 28 or 29

Check tightness of plug connection to airbag unit.

If plug connections are tight, try installing a new airbag unit.

Attempt to reset airbag warning light ([ELECT-12](/manual/electrical/air-bag-warning-light-reset)) and then turn the ignition on.

If fault is still present, replace control unit.

## Faults 2A, 2B, 2C

Try installing an airbag unit.

Attempt to reset airbag warning light ([ELECT-12](/manual/electrical/air-bag-warning-light-reset)) and then turn the ignition on.

If fault is still present, replace control unit.

## Fault 2D

Replace the contact unit.

Check plug contacts of plug connections to airbag unit and contact unit for corrosion.

If contacts are in good condition, try connecting a new airbag unit.

Attempt to reset airbag warning light ([ELECT-12](/manual/electrical/air-bag-warning-light-reset)) and then turn the ignition on.

If fault is still present, replace control unit.

## Fault 2E or 2F

Check plug contacts of plug connections to airbag unit and contact unit for corrosion.

If contacts are in good condition, try connecting a new airbag unit.

Attempt to reset airbag warning light ([ELECT-12](/manual/electrical/air-bag-warning-light-reset)) and then turn the ignition on.

If fault is still present, replace control unit.

## Faults 30 and 31

Central warning lamp and belt symbol still light up after failure of the airbag sign.

Remove and check control lamp and replace if necessary.

Check wiring harness for damage and replace control unit if necessary.

## Fault 32

Replace control unit.

## Faults 33 and 34

Fault indications 33 and 34 are displayed only after an accident with airbag activation. In this case, all components must be replaced.
