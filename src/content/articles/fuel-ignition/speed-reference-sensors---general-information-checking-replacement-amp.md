---
title: "Speed and Reference Sensors - Checking, Replacement, and Adjustment"
category: fuel-ignition
subsystem: "Ignition"
author: CG
difficulty: intermediate
sourceUrl: https://www.clarks-garage.com/shop-manual/ign-02.htm
description: "The 944 Engine Managment system uses two crankshaft sensors. One (Reference Sensor) determines the #1 piston (front of the engine) position relative to Top D…"
code: IGN-02
---

## Torque specifications

Quick reference for the fasteners in this procedure — see the steps below for full context, and verify against your model year.

| Fastener | Size | Torque |
| --- | --- | --- |
| Speed / reference sensor retaining bolts | — | 8 Nm (6 ft-lb) |


## Introduction

The 944 Engine Managment system uses two crankshaft sensors. One (Reference Sensor) determines the #1 piston (front of the engine) position relative to Top Dead Center (TDC). When we refer to TDC, we are referring to the pistons highest position on the compression stroke. The second sensor (Speed Senors) counts the teeth on the flywheel and provides this signal in the form of pulses to the Engine Management Computer (DME) for engine speed in RPM (Revolutions Per Minute). Using the combination of the two signals, the DME can determine where the engine position is at any point in its cycle to apply the correct fuel injector cycling and correct ignition firing. The speed sensor's signal is also used as a safety feature by the DME (after initial cranking is complete) to shut down the fuel pump if engine speed falls below 300 RPM.

The speed and reference sensors can be one of the sources of a number of starting and running problems. This procedure will describe how to test the sensors for proper operation. It will also describe how to replace and adjust the sensor clearance if they are bad.

The sensors are located on the top of the clutch housing at the back of the engine. You can locate them by looking from the driver's side of the car (left-hand drive) down at the back of the engine near the firewall. Here's a picture showing what the sensors look like:

![Speed and Reference Sensors - Checking, Replacement, and Adjustment](/articles/speed-reference-sensors---general-information-checking-replacement-amp/speed-reference-sensor-2.jpg)

## Tools

- 10 mm socket or 5 mm Allen head socket (depending on type of sensor retaining bolt)
- 6 mm Allen head socket
- 0.8 mm thick washer
- Multi-Meter (for checking sensor resistances)
- Oscilloscope (optional - for checking sensor output)

## Checking Sensor Operation

## Sensor Resistance Checks

1. Disconnect the Sensor plug connector at the back of the engine compartment.
2. Using a multi-meter, check the sensor resistances as follows:

   |  |  |
   | --- | --- |
   | **Speed Sensor** | |
   | **Terminals** | **Resistance Reading** |
   | 8 - 27 | 600 - 1600 ohms |
   | 8 - 23 | > 1 M-ohm |
   | **Reference Sensor** | |
   | **Terminals** | **Resistance Reading** |
   | 25 - 26 | 600 - 1600 ohms |
   | 25 - 78 | > 1 M-ohm |

   ![Speed and Reference Sensors - Checking, Replacement, and Adjustment](/articles/speed-reference-sensors---general-information-checking-replacement-amp/speed_reference_sensor_connectors.jpg)

## Sensor Operational Checks

An operational check of the speed and reference sensor output signals is the ultimate test to show whether the sensors are providing proper signals to the DME computer. However, to correctly perform the test, it requires an oscilloscope. We'll also discuss checking the output with a multimeter.

1. Remove the fuel pump fuse.
2. Disconnect the DME computer plug.
3. To check the speed sensor output, connect an oscilloscope from terminals 8 - 27 on the DME plug.
4. Crank the vehicle and check for a saw tooth wave output with a peak-to-peak voltage of > 2.5V.
5. To check the reference sensor output, connect an oscilloscope from terminals 25 -26 on the DME plug.
6. Crank the vehicle and check for a periodic pulse with a peak-to-peak voltage of > 2.0V. The frequency of the pulses depends on the starter cranking speed.
7. If either voltage is less than the spec, check the sensor clearance using the section titled "Adjusting Sensor Clearance".

   **NOTE**

   The sensor output signals can also be checked using a multi-meter. However, checking with a multi-meter will only tell you if there is and output signal and will not correctly measure the magnitude of the output voltage. So, it will not tell you if the signal is of significant magnitude to be sensed by the DME computer.

   Another way to check the operation of the speed and reference sensors it to crank the vehicle and watch the response of the tachometer. If the tachometer jumps during cranking, the speed and reference sensors are probably good. If it does not jump, it indicates a problem with the speed and/or reference sensor or the DME computer. If it's the speed and/or reference sensors, it could be a bad sensor or the clearance gap is too large (see "Adjusting Sensor Clearance").

## Sensor Removal

1. Disconnect the battery negative lead.
2. Disconnect the speed and/or reference sensor connectors at the back of the intake manifold.
3. Remove the sensor retaining bolt. Two different types of retaining bolts were used on the sensors. You'll need a 5 mm Allen head socket or 10 mm socket and ratchet to remove the sensor retaining bolts.![Speed and Reference Sensors - Checking, Replacement, and Adjustment](/articles/speed-reference-sensors---general-information-checking-replacement-amp/speed-reference-sensor-retaining-bolts.jpg)
4. Twist the sensor from side-to-side as you pull up on it. Sometimes they'll get stuck and twisting will help free them.

## Sensor Installation

1. If both sensors are to be replaced, check the labels on the wiring harness near the connector bracket and at the sensor mounting bracket to ensure correct installation. On the wiring harness the label will read as follows:
   - DG = Speed Sensor
   - BG = Reference Sensor

   The mounting bracket is labelled as follows:

   - D = Speed Sensor
   - B = Reference Sensor

   It is sometimes difficult to read the marks on the mounting bracket. If you can not read the marks, the sensor closest to the firewall is the speed sensor.

   **NOTE**

   I ran across a situation once while installing and engine in a 944 where the wire labels were missing from the wire connectors going to the DME Plug connector and the connectors had been removed from their mounting bracket. So, it was impossible to tell which wiring harness connector went to which sensor. To identify the connectors, I had to take resistance readings using an ohmmeter from the DME Plug connector to the sensor connectors. If you run into the same situation, you can use the diagrams below and an ohmmeter to determine which connector goes to which sensor.

   ![Speed and Reference Sensors - Checking, Replacement, and Adjustment](/articles/speed-reference-sensors---general-information-checking-replacement-amp/dme_plug.jpg)
2. If the sensor mounting bracket was moved or you are unsure if the sensors are correctly aligned perform the "Adjusting Sensor Clearance" procedure below.
3. Install the sensors and retaining bolts. Torque retaining bolts to 8 Nm (6 ft-lb).

## Adjusting Sensor Clearance

1. The speed and reference sensors do not normally need adjustment even after replacement. Adjustment is only required if the sensor mounting bracket is removed or the mounting bracket locking bolt is inadvertently loosened.
2. Remove the speed sensor.
3. Loosen the mounting bracket locking bolt (6 mm Allen head) and pivot bolt and then re-tighten finger tight.![Speed and Reference Sensors - Checking, Replacement, and Adjustment](/articles/speed-reference-sensors---general-information-checking-replacement-amp/speed_reference_sensors.jpg)
4. Glue the 0.8 mm thick washer to the bottom of the sensor.

   **NOTE**

   I have a clearance adjustment sensor. This is an old speed sensor with the electrical lead cut off to which I have washer permanently glued.

   ![Speed and Reference Sensors - Checking, Replacement, and Adjustment](/articles/speed-reference-sensors---general-information-checking-replacement-amp/test_speed_sensor.jpg)
5. Install the sensor with mounted washer and tighten.
6. Move the bracket down until it stops again the ring gear on the flywheel.
7. Tighten the mounting bracket locking bolt and pivot bolt.
8. Remove the sensor with washer.
9. If the sensor is to be reused, pry the washer off the sensor.
10. Install sensor and torque retaining bolt to 8 Nm (6 ft-lb).
11. Reconnect battery.

Clark's Garage Â© 1998
