---
title: "Ignition System Troubleshooting"
category: fuel-ignition
subsystem: "Ignition"
author: CG
difficulty: intermediate
tools: [dme-diagnostic-adapter, durametric, fuel-pressure-gauge, multimeter]
sourceUrl: https://www.clarks-garage.com/shop-manual/ign-04.htm
description: "If you've come to this procedure, you probably suspect that you have a no spark condition. If so, you should have already verified that you actually have a n…"
code: IGN-04
---

## Introduction

If you've come to this procedure, you probably suspect that you have a no spark condition. If so, you should have already verified that you actually have a no spark condition by performing the initial "no spark" test described in [TS-01](/manual/troubleshooting/ts-01-engine), Troubleshooting - Engine Will Not Start.

There are many different ways to go about testing for a no spark condition. The only problem in determining the ultimate cause of a no spark condition is that if the condition is caused by a problem with the DME computer, there's really no way to conclusively test the DME. The same is true with a no fuel condition. So, what we have to do is determine, as best we can, whether the DME is getting power and whether it's getting all of the correct input signals it requires to run the engine. If we get all of the proper inputs and the DME is still not providing the desired output (i.e. spark from the ignition coil or running the fuel pump), we make the assumption that the DME computer is bad and we replace it.

One of the best ways to test the DME computer is to swap it for a known good DME computer. However, most of us don't have the luxury of keeping a spare DME computer on hand. However, if you suspect that starting or running problem may be due to a bad DME computer, try to borrow a computer to test your car before running out and buying a DME.

## Tools

- Mulitmeter
- Test lead jumpers

|  |  |
| --- | --- |
| **No Spark Condition** | |
| **Possible Cause** | **Comments** |
| Bad Distributor Cap / Rotor | Inspect distributor cap and rotor per procedure below. |
| Bad Ignition Coil | Check coil using Ignition Coil Test procedure below. |
| Bad Engine Cranking / Running Signal to DME | Check engine cranking / running signals using [FUEL-16](https://www.clarks-garage.com/shop-manual/fuel-16.htm). |
| Faulty DME computer | Check DME computer using [FUEL-16](https://www.clarks-garage.com/shop-manual/fuel-16.htm). |

## Distributor Cap and Rotor Inspection

1. Grasp the distributor cap and attempt to move it back and forth. If it moves easily, the retaining screws are not properly engaged or the distributor cap gasket is compressed and needs to be replaced.
2. Using [IGN-01](/manual/fuel-ignition/distributor-cap-and-rotor-replacement), remove the distributor cap.
3. Inspect the distributor cap for the following and replace as necessary:
   1. Cracks
   2. Carbon tracking
   3. Moisture buildup on inside of cap
   4. Debris
   5. Worn rotor button
   6. Pitted, worn, or charred terminals
4. Inspect the rotor for charring or pitting and replace if necessary.
5. Check the rotor retaining screw is in place. These screws have a tendency to fall out causing the rotor to become misaligned.
6. Ensure the dust cover is securely in place behind the rotor. This dust cover is important because it keeps debris from the belt housing area from getting into the distributor cap and causing poor or non-existent spark.

## Ignition Coil Test

1. Disconnect the ignition coil output wire at the distributor cap.
2. Connect a spark plug to the end of the ignition coil output wire which you just disconnected.
3. Connect a ground wire to the threaded portion of the spark plug.
4. Disconnect the ignition coil ground wire from the negative terminal on the coil (Green Wire).
5. Connect one end of a ground wire to the ignition coil negative terminal.
6. Turn the ignition switch to the ON position.
7. Tap the other end of the ignition coil ground wire jumper on an good grounding point (for example the battery negative terminal) and look for sparks at the spark plug that correspond to the frequency of your tapping of the ground wire.
8. If you have a good spark at the spark plug, the ignition coil is good.
9. If you don't get a good spark, check for approximately 12 VDC from the coil positive terminal (black wire) to ground with the ignition switch in the ON position. You should also get approximately 12 VDC from the coil negative terminal (Green wire) to ground

## Ignition Coil Resistance Check

In addition to the test above, you may elect to perform an ignition coil resistance check as confirmation of the coil's condition.

1. Check the ignition coil primary coil resistance by connecting an ohmmeter between the positive (Black wire) and negative (Green wire) terminals on the coil. The resistance should be 0.4 to 0.6 ohms.
2. Check the ignition coil secondary coil resistance by connecting an ohmmeter between the coil output terminal and the ignition coil negative terminal. The resistance should be 5000 to 7200 ohms.
