---
title: "Air Bag Warning Light Reset"
category: electrical
subsystem: "Electrical"
author: CG
difficulty: intermediate
tools: [dme-diagnostic-adapter, durametric, multimeter]
sourceUrl: https://www.clarks-garage.com/shop-manual/elect-12.htm
description: "I'm not sure who actually came up with this procedure originally. However, to my knowledge it first appeared in the 944 FAQ which is now maintained by Kevin …"
code: ELECT-12
---

## Introduction

I'm not sure who actually came up with this procedure originally. However, to my knowledge it first appeared in the 944 FAQ which is now maintained by Kevin Gross. If anyone knows who originally came up with this, please pass the info along so I can provide appropriate credit. This procedure is used to reset the air bag warning light on all 944s equipped with air bags. This is normally required when the steering wheel (and hence the air bag) are removed for work on the dash, instrument cluster, or steering column switches. This procedure does not work for 968s as they require a Bosch Hammer diagnostic tool to reset the air bag warning light.

Under the dash on the passenger's side of the vehicle (LHD cars), you'll find a white Molex connector with three female pins (diagram below). The center pin (Pin #2) is used to apply a ground to the connector in a series of specific timed steps to reset the air bag warning light. You can use a wire with a pin connector to make the ground connection or the bare end off a wire that has been tinned with solder. In either case, make sure you have a good connection in the pin (i.e. if using the bare end of a wire make sure the fit is snug enough that the wire will not fall out).

![Air Bag Warning Light Reset](/articles/air-bag-warning-light-reset/air_bag_molex.jpg)

## Tools

- One jumper with pin connector (may use bare wire tinned with solder instead) on one end and alligator clip on the other (approximately 3 feet long)
- One jumper with alligator clips on both ends (approximately 3 feet long)
- Stop watch, watch with a sweep second hand, or digital watch that displays seconds

## Alternative Tool

This tool is an alternative to the two jumper arrangement. Khalil Spencer came up with the idea for this test rig. The tool is shown in the diagram below. All of the components are available at an electronics store (Radio Shack, for example). You may have to try several different sizes of pin connectors to find the correct size to fit in the hole on the air bag reset Molex connector (see introduction for location of connector). You can also obtain the correct connector from Porsche (PN 171.971.998 B). Alternatively, you can also leave the pin connector end off and tin the end of the The pushbutton switch is a momentary contact switch (SPST Momentary). In other words, it is spring loaded and the switch is closed as long as the button is pushed. The switch opens when the button is released.

![Air Bag Warning Light Reset](/articles/air-bag-warning-light-reset/air_bag_reset_rig.jpg)

## Procedure (Two Jumpers)

1. Turn the ignition switch to the off position.
2. Install the jumper with the pin connector or bare end of wire into Pin #2 of the white Molex connector (passenger's side under dash). Route the alligator clip end of the jumper to the vicinity of the driver's seat.
3. Install the second jumper (two alligator clips) to a grounding point (metal door latch is typically used). Route the other end of the jumper to the vicinity of the driver's seat. Note: During the reset procedure you will be connecting and disconnecting the alligator clips from the two jumpers to provide a ground on the center pin of the Molex connector.
4. Connect the alligator clip ends of the two jumpers.
5. Turn the ignition switch to the on (run) position but, do not start the car.
6. After five seconds, disconnect the wire jumpers.
7. Wait another five seconds.
8. Reconnect the jumpers to ground Pin #2.
9. After five seconds, disconnect the jumpers.
10. Wait five seconds after disconnecting the jumpers.
11. Turn the ignition switch off.
12. Start the car. The air bag warning light should clear after approximately 10 seconds. If the light does not clear repeat the procedure. If, after three attempts, the light does not clear, there is most likely a problem with the air bag system which needs to be repaired. It is possible to read the fault codes for the air bag system using a similar procedure. I'm working on that procedure and hope to have it in the near future.

## Procedure (Test Rig)

1. Turn the ignition switch to the off position.
2. Install the test rig with the pin connector bare end of wire into Pin #2 of the white Molex connector (passenger's side under dash).
3. Connect the other end of the test rig (alligator clip) to a grounding point (metal door latch is typically used).
4. Depress and hold the pushbutton on the test rig.
5. Turn the ignition switch to the on (run) position but, do not start the car.
6. When the ignition has been on for five seconds, release the test rig pushbutton.
7. After five seconds, again depress the pushbutton on the test rig and hold for five seconds.
8. Release the pushbutton and turn the ignition switch off.
9. Remove the test rig.
10. Start the car. The air bag warning light should clear after approximately 10 seconds. If the light does not clear repeat the procedure. If, after three attempts, the light does not clear, there is most likely a problem with the air bag system which needs to be repaired. It is possible to read the fault codes for the air bag system using a similar procedure. I'm working on that procedure and hope to have it in the near future.
