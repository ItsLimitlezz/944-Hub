---
title: "Cooling Fan Operation and Troubleshooting"
category: engine
subsystem: "Cooling System"
author: CG
difficulty: intermediate
tools: [coolant-pressure-tester, multimeter]
sourceUrl: https://www.clarks-garage.com/shop-manual/cool-01.htm
description: "Introduction(#intro)"
code: COOL-01
---

|  |
| --- |
| COOL-01, Cooling Fan Operation and Troubleshooting |

## Table of Contents

[Introduction](#intro)

Early 944s With Air Conditioning

- [Cooling Fan Operation On Early 944s With Air Conditioning](#earlywithair)
- [Testing Fan Relay One Early 944s With Air Conditioning](#earlyrelaytest)
- [Testing Thermofan Switch On Early 944s](#earlythermofantest)

  
Early 944s Without Air Conditioning

- [Cooling Fan Operation On Early 944s Without Air Conditioning](#earlywithoutair)
- [Testing Fan Relay One Early 944s With Air Conditioning](#fanrelaywithout)

  
Late 944 Cooing Fans (All)

- [Cooling Fan Operation On Late Model 944s (All)](#latefanoperation)
- [Testing Fan Relay On Late Model 944s (All)](#laterelaytest)

  
[Repairing 944 Fan Relays](#fanrelayrepair)

## Introduction

When it comes to troubleshooting cooling fan problems, there is always a lot
of confusion about how the cooling fans really work. This is probably due in part
to the fact that some of the drawings floating around are of poor quality and
difficult to read. Others are just plain incorrect. Even the factory drawings
are difficult to read and understand at times. Because of the poor quality
drawings out there, some people don't realize that there is a difference in fan
operation between the early (pre-1985.5) and later 944s - at least according to
the factory electrical drawings and my own experience.

The descriptions of cooling fan operation contained in this procedure are
based on the factory electrical diagrams, the troubleshooting experience of
other 944 owners, and my own experience.## Cooling Fan Operation of Pre-1985.5 944s with Air Conditioning

On early 944s equipped with air conditioning, there are two electric cooling
fans. The driver's side cooling fan is supplied via a parallel circuit. One leg
of the parallel circuit has a resistor which causes the fan to run in slow
speed. The other leg of the parallel circuit consists of a contact in the
cooling fan relay. The passenger's side fan is supplied via a contact in the
cooling fan relay.

When the coolant temperature reaches a preset value (normally 92 °C or 198
°F), the temperature switch (normally referred to as the thermofan switch)
closes and cause the driver's side fan to run. We'll refer to it as the primary
fan. Since the resistor in series with the fan is still in the circuit at this
point, the fan runs in slow speed. The fan will run as long the temperature
remains above the setpoint, regardless of whether the ignition is turned on.
This is a common problem area which will be discussed later.

When the ignition is on and the air conditioning is turned on, the air
conditioning relay picks up. This causes the cooling fan relay to energize,
closing two contacts. One contact causes the secondary cooling fan to run. The
other is a contact that is in parallel with the "slow speed" resistor
for the primary fan motor. This shorts out the resistor and causes the primary
fan to run in fast speed. The second fan has no "slow speed" resistor
so when it starts, it always runs in fast speed. Also, when the air
conditioning is turned on (with the ignition on), the primary fan will run
regardless of coolant temperature.

When the ignition is turned on, if a high temperature condition is sensed by
the thermofan switch, a contact closes in the thermofan switch circuit which
energizes the cooling fan relay and causes both fans to run in fast speed.

For a diagram of the early cooling fan circuit (with air conditioning)[click here](https://www.clarks-garage.com/graphics/early_cooling_fan_with_ac.jpg).

Below is a troubleshooting guide for the early 944 cooling fan
circuit. The troubleshooting guides in this procedure assume (in most cases)
that a single failure is causing the malfunction. While multiple failures can
occur, it would be nearly impossible to develop a guide to cover all possible
combinations of failures.

|  |  |  |
| --- | --- | --- |
| **Cooling Fan Troubleshooting Guide  Early 944s with Air Conditioning Operation** | | |
| **Symptom** | **Possible Causes** | **Testing / Repair** |
| Driver's side fan runs continuously.  (Ignition OFF) | Most likely cause is a bad thermofan switch. | Disconnect electrical connector for thermofan switch. If fan stops, the thermofan switch is most likely bad. Some folks will tell you that a bad cooling fan relay can also cause this. However, with the ignition off, the thermofan switch and relay would both have to fail to cause the problem. |
| Both fans run continuously.  (Ignition ON) | Bad thermofan switch. | Disconnect electrical connector for the thermofan switch. If fans stop, thermofan switch is bad. |
| Bad air conditioning relay. | Remove air conditioning relay. If fans stop, AC relay is most likely bad. |
| One or both fans will not run. | Bad fuse or fuses. | Auxiliary Fuse Panel:     Fuse 3 - Driver's Side Cooling Fan     Fuse 5 - Passenger's Side Cooling Fan |
| Bad fan motor. | Disconnect electrical connector at fan and take resistance readings on fan motor. An infinite resistance or ground indicates that the motor is bad. Realize that it is highly unlikely for both fan motors to go bad at the same time. |
| Bad cooling fan relay. | With a bad cooling fan relay, the driver's side cooling fan should still run in slow speed on high coolant temperature.  See procedure for testing the cooling fan relay. |
| Bad air conditioning relay. | A bad air conditioning relay will only keep the fans from running when the ignition is on and the air conditioning is turned on. Both fans should still in high run in fast speed if the ignition is on and a high coolant temperature exists (i.e. thermofan switch contact is closed).  See procedure for testing air conditioning relay. |
| Bad slow speed fan resistor. | Fan will still run in fast speed, but may not in slow speed. Locate the slow speed fan resistors on the firewall behind the tachometer and take resistance readings across the resistors. The resistance should be less than 1 ohm. If the fan(s) will not run at all in slow speed, you'll likely see an infinite resistance. If the fan is simply running very slowly you may see some resistance that is higher than 1 ohm. Realize that it is highly unlikely for both fan resistors to go bad at the same time. |

## Testing Cooling Fan Relay (Early 944 with AC)

## Tools Needed

·     
12 VDC Power
Supply and Leads

·     
Multimeter and leads
with alligator clips

## Procedure

1.     
Remove the Cooling Fan Relay.

2.     
Take resistance readings on the relay as follows:

Terminals "A" to
"B" - Reading should be infinite (i.e. open circuit)

Terminals "30" to
"87" - Reading should be infinite (i.e. open circuit)

3.     
Connect a 12 VDC power supply across terminals "85"
and "86". You should hear the relay click when you connect the power
supply.

4.     
With the power supply connected to the relay, take resistance
readings on the relay as follows:

Terminals "A" to
"B" - Reading should be zero (i.e. short circuit)

Terminals "30" to
"87" - Reading should be zero (i.e. short circuit)

5.  If any of the resistance readings
taken above are bad, the relay is bad and should be replaced.

## Testing Early 944 Air Conditioning Relay

## Tools Needed

·     
12 VDC Power
Supply and Leads

·     
Multimeter and
leads with alligator clips

## Procedure

1.     
Remove the Air Conditioning Relay.

2.     
Take resistance readings on the relay as follows:

Terminals "A" to "B" - Reading
should be infinite (i.e. open circuit)

Terminals "30" to "87" -
Reading should be infinite (i.e. open circuit)

3.     
Connect a 12 VDC power supply across terminals "85"
and "86". You should hear the relay click when you connect the power
supply. Make sure you connect the positive lead of the power supply to terminal 85 and the negative to terminal 86. There's a diode in the circuit that will prevent the relay from working if you don't.

4.     
With the power supply connected to the relay, take resistance
readings on the relay as follows:

Terminals "A" to "B" - Reading
should be zero (i.e. short circuit)

Terminals "30" to "87" -
Reading should be zero (i.e. short circuit)

5.  If any of the resistance readings
taken above are bad, the relay is bad and should be replaced.

## General Testing (Early 944s with Air Conditioning)

If you believe there may be a problem with your cooling fan circuit, but
you're not exactly sure what the problem is, the following procedure will guide
you through some steps for testing the general overall condition of the cooling
fan circuit. These tests check the operation of the cooling fans in various
modes of operation.

## Tools

·     
Multimeter

·     
Electrical Jumpers

## Test 1

This test checks the slow speed operation of the primary (driver's side)
cooling fan.

1.     
Disconnect the electrical connector for the thermofan switch
(below the upper radiator hose connection to radiator.

2.     
Jumper the contacts in the electrical connector.

3.     
The driver's side cooling fan should run in slow speed.

A successful test demonstrates that the power supply to the driver's side
fan via the slow speed resistor is good.

## Test 2

This test checks the fast speed operation of both fans.

1.     
With the thermofan switch electrical connector jumpered, turn
the ignition on.

2.     
Both cooling fans should run in fast speed.

A successful test demonstrates that the power supply
to both cooling fans is good and that both fans and the cooling fan relay are
working properly.

## Test 3

This test checks the fast speed operation of both
fans in the Air Conditioning mode.

1.     
Remove the jumper from the thermofan switch electrical
connector.

2.     
With the ignition switch ON, turn on the air conditioning
switch.

3.     
Both cooling fans should run in fast speed.

A successful test again demonstrates that the power
supply to both cooling fans is good and that both fans, the AC relay, and the
cooling fan relay are working properly.## Testing the Early Thermofan Switch

## Tools

·     
Thermometer (which goes to at least 200 °F)

·     
Multimeter

## Procedure

1.     
Connect a Multimeter across the contacts on the thermofan
switch. The thermofan switch contacts should be open (i.e.  infinite resistance on Multimeter).

2.     
Suspend the thermofan switch in a pan of water and heat the water
on a stove. Insert the thermometer into the water to monitor water temperature.

3.     
When the water temperature reaches 198° F, the contact in the
thermofan switch should close (i.e. zero resistance reading on the Multimeter).## Cooling Fan Operation On Pre-1985.5 944s Without Air Conditioning

Early 944s without air conditioning were equipped with a single radiator
cooling fan as opposed to two fans. The single cooling fan is supplied by a
parallel circuit. Like the cars with AC, if a high coolant temperature exists
with the ignition off, the contact in the thermofan switch closes and causes
the cooling fan to run in slow speed (via the resistor in the parallel
circuit). When the ignition is turned on the cooling fan relay is energized,
closing a contact to short out the slow speed resistor. If the high temperature
condition still exists (i.e. thermofan switch closed), the cooling fan will run
in fast speed.

For an early model 944 cooling fan circuit diagram (no AC)[click here](https://www.clarks-garage.com/graphics/early_cooling_fan_no_ac.jpg).

                    

|  |  |  |
| --- | --- | --- |
| **Cooling Fan Troubleshooting Guide**  **Early 944s without Air Conditioning** | | |
| **Symptom** | **Possible Causes** | **Testing / Repair** |
| Cooling fan runs continuously.  (Ignition OFF) | Bad thermofan switch. | Disconnect electrical connector for thermofan switch. If fan stops, the thermofan switch is bad. |
| Fan will not run. | Bad fuse. | Auxiliary Fuse Panel:     Fuse 3 - Cooling Fan |
| Bad fan motor. | Disconnect electrical connector at fan and take resistance readings on fan motor. An infinite resistance or ground indicates that the motor is bad. |
| Bad slow speed fan resistor. | Fan will still run in fast speed but, not in slow. Locate the slow speed fan resistor on the firewall behind the tachometer and take resistance readings across the resistor. The resistance should be less than 1 ohm. If the fan will not run at all in slow speed, you'll likely see an infinite resistance. If the fan is simply running very slowly you may see some resistance that is higher than 1 ohm. |
| Fan will not run in fast speed. | Bad cooling fan relay. | See procedure for testing relay and cooling fan. |

## Testing Cooling Fan Relay (Early 944s without AC)

## Tools Needed

·     
12 VDC Power
Supply and Leads

·     
Multimeter and
leads with alligator clips

## Procedure

1.     
Remove the cooling fan relay.

2.     
Take a resistance reading on the relay as follows:

Terminals "30" to "87" -
Reading should be infinite (i.e. open circuit)

3.     
Connect a 12 VDC power supply across terminals "85"
and "86". You should hear the relay click when you connect the power
supply. Make sure you connect the positive lead of the power supply to terminal 85 and the negative to terminal 86. There's a diode in the circuit that will prevent the relay from working if you don't.

4.     
With the power supply connected to the relay, take a
resistance reading on the relay as follows:

Terminals "30" to
"87" - Reading should be zero (i.e. short circuit)

5.  If any of the resistance readings taken
above are bad, the relay is bad and should be replaced.

## General Testing (Early 944s without Air Conditioning)

If you believe there may be a problem with your cooling fan circuit, but
you're not exactly sure what the problem is, the following procedure will guide
you through some steps for testing the general overall condition of the cooling
fan circuit. These tests check the operation of the cooling fan in various
modes of operation.

## Tools

·     
Multimeter

·     
Electrical Jumpers

## Test 1

This test checks the slow speed operation of the cooling fan.

1.     
Disconnect the electrical connector for the thermofan switch
(below the upper radiator hose connection to radiator.

2.     
Jumper the contacts in the electrical connector.

3.     
The cooling fan should run in slow speed.

A successful test demonstrates that the power supply to the cooling fan via
the slow speed resistor is good.

## Test 2

This test checks the fast speed operation of the cooling fan.

1.     
With the thermofan switch electrical connector jumpered, turn
the ignition on.

2.     
The cooling fan should operate in fast speed.

A successful test demonstrates that the power supply
to the cooling fan is good and that the fan and the cooling fan relay are
working properly.## Cooling Fan Operation On Late Model 944s

The cooling fan operation on late model 944s is similar to that of early 944s.
However, there are some distinct differences.

The late model 944s use a "slow speed" resistor similar to the
early cars. However, on later cars, there are two resistors, one for each of
the fan motors.

As with the early cars, the thermofan switch (at 92 °C) will complete the
fan circuit, even if the ignition is not on. However, unlike the early cars
when the fan circuit is completed, both fans run instead of just the driver's
side fan. Also, on the later cars the thermofan switch is a dual element
temperature switch with one contact closing at 92 °C for slow speed operation
and one closing at 102 °C for high speed operation (slow speed resistor
bypassed). The fans will operate is slow speed regardless of ignition switch
position. However, fast speed operation is only available with the ignition
switch on.

For a late model 944 cooling fan circuit diagram[click here](https://www.clarks-garage.com/graphics/cooling_fan_late_1.jpg)

                    

|  |  |  |
| --- | --- | --- |
| **Cooling Fan Troubleshooting Guide**  **1985.5 and Newer 944s** | | |
| **Symptom** | **Possible Causes** | **Testing / Repair** |
| Both cooling fans run continuously.  (Ignition OFF) | Bad thermofan switch. | Disconnect electrical connector for thermofan switch. If fans stop, the thermofan switch is bad. |
| Bad cooling fan relay. | Disconnect the electrical connector for thermofan switch. If fans DO NOT stop, the cooling fan relay is most likely bad. |
| Fan(s) will not run. | Bad fuse(s). | Fuse 10 - Cooling Fan 2  Fuse 15 - Cooling Fan 1     If neither cooling fan will run, it is unlikely that both fuses have blown at the same time. |
| Bad fan motor. | Disconnect electrical connector at fan and take resistance readings on fan motor. An infinite resistance or ground indicates that the motor is bad. Realize that it is highly unlikely for both fan motors to go bad at the same time. |
| Bad cooling fan relay. | See procedure for testing cooling fan relay. |
| Bad slow speed fan resistor. | In this case the fans will still run in fast speed but, will not run in slow speed. Locate the slow speed fan resistors in the passenger's footwell behind the glove box (on the bottom side of the battery tray) and take resistance readings across the resistors. The resistance should be less than 1 ohm. If the fan(s) will not run at all in slow speed, you'll likely see an infinite resistance. If the fan is simply running very slowly you may see some resistance that is higher than 1 ohm. Realize that it is highly unlikely for both fan resistors to go bad at the same time. |
| Bad thermofan switch. | Even if the thermofan switch is bad, the fans should still run in slow speed when the AC is turned on. |
| Fans will not run in fast speed. | Bad cooling fan relay. | See procedure for testing relay and cooling fan. |

## Testing Late Model Cooling Fan Relay

## Procedure

1.           
Ensure the air conditioning switch is in the OFF position.

2.           
With the ignition off, disconnect the electrical connector for
the thermofan switch (below the upper hose connection at the radiator).

3.           
Jumper terminals 2 and 3 on the thermofan switch electrical
connector. The cooling fans should both start in slow speed.

**NOTE**

The terminals on the thermofan switch connector are not numbered. Therefore it is necessary to determine the terminal numbers by the orientation of the tab on the plug connector (See picture and diagram below).

![Cooling Fan Operation and Troubleshooting](/articles/fan-operation-and-troubleshooting/thermofan-plug2.jpg)![Cooling Fan Operation and Troubleshooting](/articles/fan-operation-and-troubleshooting/thermofan-plug.gif)

4.           
With the jumper still installed, turn the ignition ON. The cooling
fans should remain operating in slow speed.

5.           
Turn the ignition OFF and swap the thermofan switch jumper to
terminals 1 and 3.

6.           
Turn the ignition ON. Both fans should start in fast speed.

7.           
Turn the ignition OFF and remove the thermofan switch jumper.

8.           
Turn the ignition ON and place the air conditioning switch in
the ON position. Both cooling fans should run in slow speed.

9.           
If the relay fails any of the above tests it is bad and should
be replaced.

## Repairing 944 Relays

If you suspect or have proven that your Cooling Fan Relay is bad, before you run out and spend $150 USD on a new relay, you may try to repair it. Like many electronic components on a 944, the fan relay is susceptable to cracking of solder joints within the relay. So, before you toss your old relay, open it up and inspect for broken solder joints. You'll have to use a magnifying glass as the cracks will be extremely small (about the size of a human hair). If you're in doubt about the condition of a particular solder joint, resolder it.
