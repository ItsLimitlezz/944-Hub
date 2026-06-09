---
title: "Troubleshooting - Engine"
category: troubleshooting
subsystem: "Troubleshooting"
author: CG
difficulty: intermediate
sourceUrl: https://www.clarks-garage.com/shop-manual/ts-01.htm
description: "This troubleshooting guide is intented to help identify and repair engine starting and running problems and engine lubrication system problems. The following…"
code: TS-01
---

## Introduction

This troubleshooting guide is intented to help identify and repair engine starting and running problems and engine lubrication system problems. The following is a list of problem symptoms discussed in this guide:

- [***Engine Will Not Rotate***](#rotate)
- [***Engine Will Rotate But Will Not Start (Fire)***](#fire)
- [***Engine Is Difficult To Start When Cold***](#cold-start)
- [***Engine Is Difficult To Start When Hot***](#hot-start)
- [***Engine Idles Rough When Cold***](#cold-idle)
- [***Engine Idle Surges***](#idle-surge)
- [***Engine Shudders At Idle***](#idle-shudder)
- [***Engine Hesitates or Stumbles During Acceleration***](#stumble)
- [***Engine Misses***](#misses)
- [***Engine Backfires***](#backfires)
- [***Engine Oil Pressure Low***](#oil-low)
- [***Engine Oil Pressure High***](#oil-high)

## Engine Will Not Rotate.

This situation is by far the easiest to troubleshoot as there are fewer possible causes than for an engine that will not fire.

|  |  |
| --- | --- |
| **Engine Will Not Turn Over** | |
| **Possible Causes** | **Refer To:** |
| Discharged or Faulty Battery | [ELECT-15](/manual/electrical/battery-checks) |
| Battery Terminals Loose or Corroded | [ELECT-15](/manual/electrical/battery-checks) |
| Bad Starter Motor or Starter Solenoid | [ELECT-16](/manual/electrical/checking-starter-operation) |
| Bad Ignition Switch | [ELECT-17](/manual/electrical/ignition-switch-and-wiring-test) |
| Broken or Loose Wiring In Starter Circuit | [ELECT-17](/manual/electrical/ignition-switch-and-wiring-test) |
| Broken Teeth on Starter Pinion or Flywheel | 1 |

1Remove starter and inspect starter pinion teeth. Roll engine using a 24 mm (or 15/16") socket and ratchet and inspect flywheel for broken teeth.

## Engine Will Rotate But Not Will Not Start (Fire).

When the engine will rotate but, will not start, it can typically be attributed to one of two causes:

1. Lack of fuel
2. Lack of spark

This is where a fuel pressure gauge, a spark tester, and a digital multimeter are essential. For the most part, these two problems can be diagnosed independently of each other. However, there are several failures which will prevent the fuel pump from running and cause a no spark condition.

**Testing for Lack of Fuel**

As I mentioned before when testing for lack of fuel is is almost essential to have a fuel pressure gauge. You may test for fuel supply by removing the end cap from the fuel rail, installing a hose, and direct the open end of the hose to a catch pan. However, even if you get fuel from the rail during testing there is no guarantee that the fuel pressure is adequate to start the car. In lieu of a pressure test, fuel pump delivery rate test will at least give you an idea of the condition of the fuel pump.

**Procedure**

1. Connect a fuel pressure gauge to the end of the fuel rail.
2. Attempt to start the vehicle while checking the fuel pressure gauge.
3. If the fuel pressure rises on the gauge indicating the fuel pump has started, compare the maximum fuel pressure reading to the specifications in [FUEL-01](/manual/fuel-ignition/checking-fuel-01).
4. If there is no increase in fuel pressure, and you suspect that that the fuel pump is not starting, refer to [FUEL-16](https://www.clarks-garage.com/shop-manual/fuel-16.htm) for fuel pump troubleshooting.
5. If your fuel pressure is low, or increases very slowly during cranking, refer to [FUEL-16](https://www.clarks-garage.com/shop-manual/fuel-16.htm) for troubleshooting other fuel related problems.

**Testing For Lack of Spark**

The first step in testing for lack of spark is to verify that a no spark condition actually exists. A simple spark tester available at most auto parts stores is very handy here. I recommend removing the fuel pump fuse to keep the fuel pump from running during spark testing.

Disconnect one of the plug wires and connect the spark tester in series with the spark plug. Crank the engine and look for spark. You'll see the spark pulsing inside the tester as the engine turns over.

If there is no spark at the spark plug, disconnect the main lead from the ignition coil to the distributor cap and connect a spark tester in series with the coil wire. Crank the vehicle and check the tester for spark to the distributor.

If you get good spark at the main lead to the distributor and no spark at the spark plug, the distributor cap and/or rotor is bad and should be replaced. If there is no spark at the distributor main lead, proceed with ignition troubleshooting using [IGN-04](/manual/fuel-ignition/ignition-system-troubleshooting), Ignition System Troubleshooting.

## Engine Is Difficult To Start When Cold.

|  |  |  |
| --- | --- | --- |
| **Possible Causes** | **Checks** | **Procedure** |
| DME Temperature Sensor | Check Sensor Resistance. | [ELECT-19](/manual/electrical/gauge-troubleshooting) |
| Fuel System Vapor Lock | Fuel System vapor lock can be caused by several things including a bad Fuel Pressure Regulator (FPR), bad fuel pump check valve, or leaking injectors. Any of these three will cause the fuel rail pressure to drop rapidly after shutdown. When this happens the heat from the engine causes the fuel remaining in the fuel rail to flash to vapor. This causes voiding in the fuel rail. During subsequent startups, it make take a long time cranking the engine or may take several attempts to get the engine to fire. This is due to the fact that the fuel pump may take some time after starting to clear the void and refill the fuel rail. To determine if vapor lock is a potential cause, perform a fuel pressure and leakdown test (FUEL-01).  If the fuel system fails the leakdown test, determine the cause of the leakdown using FUEL-17. | [FUEL-01](/manual/fuel-ignition/checking-fuel-01) |
| Fuel Pressure Too High | Disconnect one fuel injector connector and attempt to start car. If the car starts and runs, where it would not before, then the Fuel Pressure Regulator (FPR) is most likely bad and should be replaced. Bascially when the FPR fails causing the fuel rail pressure to go high, the injectors have too high a differential pressure across them, they draw too much current, and the injector driver shuts down. Disconnecting one injector wire reduces the injector current enough to allow the engine to start. Realize that the car will run very rough as it's running on three cylinders | N/A |
| Speed / Reference Sensors | Sometimes a failing or misadjusted Speed and/or Reference sensor will cause difficult start. This is most common when the engine is hot. However, they can cause hard cold starting as well. Sometimes this may be simply to the wires or connectors. You may try wiggling the Speed and Reference sensor wires and connectors to see if the car will start.  You should also try removing the sensors and cleaning the ends. Due to magnetic field buildup in the sensors they will pick up metal fines from the flywheel ring gear teeth and other sources which can interfere with signal development.  Also, check the Speed and Reference sensor clearance. | [IGN-02](/manual/fuel-ignition/speed-reference-sensors---general-information-checking-replacement-amp) |
| DME Computer | Sometimes the DME computer will develop bad solder joints. Try tapping on the DME computer while attempting to start the car. If the car starts while tapping on the DME computer, where it would not before, the DME has some bad solder joints which should be repaired. Of course, if you tap on the DME computer and the car still doesn't start, it doesn't necessarily mean the DME is good or bad. If you eliminate all other problems, then it may be time to consider replacing the DME computer. As a minimum, I'd open up the DME computer and inspect it for bad solder joints. | [DME-05](https://www.clarks-garage.com/shop-manual/dme-05.htm) |

## Engine Is Difficult To Start When Hot.

|  |  |  |
| --- | --- | --- |
| **Possible Causes** | **Checks** | **Procedure** |
| DME/Fuel Pump Relay | One of the first signs of a failing DME/Fuel Pump is difficult hot starting. Quite often when the DME/Fuel Pump relay starts failing the car will start without problems when it is cold. However, when the car has been operated at normal operating temperature for a while, it will refuse to start when the car is shut down and re-start is attempted while the car is still warm. After the car is allowed to sit and cool for some period of time (usually 30 minutes to 1 hour), the car will again start without problem. If you experience hot start problems, try making up and installing a jumper for the DME/Fuel Pump relay (FUEL-05 under "Emergency Repairs") to see if it solves the hot start problem. Realize that you must attempt this while you are experiencing the hot start problem for the test to be valid. | [FUEL-05](/manual/fuel-ignition/dme-fuel-pump-relay-technical-information-and-testing) |
| Fuel System Vapor Lock | Fuel System vapor lock can be caused by several things including a bad Fuel Pressure Regulator (FPR), bad fuel pump check valve, or leaking injectors. Any of these three will cause the fuel rail pressure to drop rapidly after shutdown. When this happens the heat from the engine causes the fuel remaining in the fuel rail to flash to vapor. This causes voiding in the fuel rail. During subsequent startups, it make take a long time cranking the engine or may take several attempts to get the engine to fire. This is due to the fact that the fuel pump may take some time after starting to clear the void and refill the fuel rail. To determine if vapor lock is a potential cause, perform a fuel pressure and leakdown test (FUEL-01).  If the fuel system fails the leakdown test, determine the cause of the leakdown using FUEL-17. | [FUEL-01](/manual/fuel-ignition/checking-fuel-01) |
| Speed / Reference Sensors | Sometimes a failing or misadjusted Speed and/or Reference sensor will cause difficult start. This is most common when the engine is hot. Sometimes this may be simply to the wires or connectors. You may try wiggling the Speed and Reference sensor wires and connectors to see if the car will start.  You should also try removing the sensors and cleaning the ends. Due to magnetic field buildup in the sensors they will pick up metal fines from the flywheel ring gear teeth and other sources which can interfere with signal development.  Also, check the Speed and Reference sensor clearance. | [IGN-02](/manual/fuel-ignition/speed-reference-sensors---general-information-checking-replacement-amp) |
| DME Computer | Sometimes the DME computer will develop bad solder joints. Try tapping on the DME computer while attempting to start the car. If the car starts while tapping on the DME computer, where it would not before, the DME has some bad solder joints which should be repaired. Of course, if you tap on the DME computer and the car still doesn't start, it doesn't necessarily mean the DME is good or bad. If you eliminate all other problems, then it may be time to consider replacing the DME computer. As a minimum, I'd open up the DME computer and inspect it for bad solder joints. | N/A |

## Engine Idles Rough When Cold.

|  |  |  |
| --- | --- | --- |
| **Possible Causes** | **Checks** | **Procedure** |
| DME Temperature Sensor | On startup when the engine is cold, the DME temperature sensor tells the DME computer that the engine (coolant) is cold. This causes the DME computer to supply a much richer mixture to the engine (a hot engine atomizes fuel better). When the DME temperature starts to fail, it normally sends a higher than normal temperature signal to the DME computer. The DME computer in turn supplies a leaner mixture to the engine than that which is normally required. So, the engine runs rough (lean) and if it gets bad enough, may not run at all. Check the cold resistance of the DME temperature sensor | [ELECT-19](/manual/electrical/gauge-troubleshooting) |
| Vacuum Leak | Inspect all hoses connecting to the intake manifold which are downstream of the AFM. | N/A |

## Engine Idle Surges.

|  |  |  |
| --- | --- | --- |
| **Possible Causes** | **Checks** | **Procedure** |
| Idle Stabilizer / Auxiliary Air Valve | Clamp line from Idle Stabilizer / Auxiliary Air Valve to the intake manifold to see if idle stabilizes. If it does remove the Idle Stabilizer / Auxiliary Air Valve, clean it with Carburetor and Choke cleaner, reinstall and check operation. If the surging idle persists, replace the Idle Stabilizer / Auxiliary Air Valve. | N/A |
| Vacuum Leak | Inspect all hoses connecting to the intake manifold which are downstream of the AFM. | N/A |
| Throttle Body Butterfly sticking | Remove throttle body and clean area around butterfly valve. | N/A |

## Engine Shudders At Idle.

|  |  |  |
| --- | --- | --- |
| **Possible Causes** | **Checks** | **Procedure** |
| Engine Idle Set Too Low | Check idle and reset if necessary. | [FUEL-08](/manual/fuel-ignition/idle-speed-adjustment) |
| Early US/Canada 944 DME Programming | There was an inherent problem with the early 944 DME programming (pre-1985.5 US/Canadian models only). These cars had a momementary fuel cutoff when the throttle was released from any throttle position off idle. However, the tendency was for the idle to drop too low before the fuel cut back in resulting in an idle shudder. The problem seems to be more noticeable on some cars and on others does not appear at all. There are several ways to fix this problem. One is to replace the DME with the DME from a 1985.5 944. The other is to replace the DME computer with an ROW (Rest of the World) DME. And finally, you can adjust the throttle stop (loosen the throttle stop lock nut) until you hear the Throttle Position Switch click. Then tighten the lock nut. This eliminates the closed-throttle switch. Start the engine and adjust the idle adjustment screw to bring the idle back down but, leave it a little high (around 1000 RPM). There is also a software fix which was developed by FR Wilk (<http://frwilk.com/early944/misc/shudder.htm>. However, it's typically beyond the capabilities of most shade tree mechanics. | N/A |

## Engine Hesitates or Stumbles During Acceleration.

|  |  |  |
| --- | --- | --- |
| **Possible Causes** | **Checks** | **Procedure** |
| Dead spot in Air Flow Sensor / Air Flow Meter (AFM) potentiometer. | Test AFM. | [ELECT-19](/manual/electrical/gauge-troubleshooting) |
| Vacuum Leak. | With a large vacuum leak, the car may idle correctly. However, as soon as you open the throttle, the car may hesitate, stumble, or even cutoff. The best way to look for vacuum leaks is to connect a source of compressed air (approximately 10 psi will do it) to the intake manifold with the engine not running and listen for air leaks. | N/A |
| Spark Plugs Fouled. | Remove spark plugs and check condition. | [ENG-18](/manual/engine/spark-plugs---checking-and-replacement) |

## Engine Misses.

|  |  |  |
| --- | --- | --- |
| **Possible Causes** | **Checks** | **Procedure** |
| Bad spark plug wires. | Run the engine in a dark area and look for arcing from the spark plug wires to the engine. | N/A |
| Cracked distributor cap. | Remove cap and check condition. | N/A |
| Faulty spark plug. | Remove spark plugs individually and inspect for broken or excessively worn electrode or cracked insulator. Check the condition of the spark plugs by color. | [ENG-18](/manual/engine/spark-plugs---checking-and-replacement) |
| Vacuum leak. | Check for vacuum leaks by pressuizing the intake manifold with compressed air. Listen for leaks. | N/A |
| Clogged fuel filter. | Replace filter. | [FUEL-03](/manual/fuel-ignition/fuel-filter-replacement) |
| DME Computer | A faulty DME computer can cause a variety of starting and running problems. Normally, problems with the DME computer are the result of bad solder joints which can frequently be repaired. There's really no way to test the DME unless you can swap it into another vehicle or unless you can borrow a known good DME to install for testing purposes. And, even a good used DME computer is a little pricey. So, I don't like to run out and replace the DME unless I've eliminated all other possible causes. If you suspect the DME computer is bad, as a minimum, I would open it up and inspect for bad solder joints (and repair them) before replacing the computer. | [DME-05](https://www.clarks-garage.com/shop-manual/dme-05.htm) |

## Engine Backfires.

|  |  |  |
| --- | --- | --- |
| **Possible Causes** | **Checks** | **Procedure** |
| Fautly ignition system. | If you have one cylinder that is not firing completely or is firing intermitently, raw fuel can be expelled into a hot exhaust system where it is subequently ignited. Check for faulty spark plugs wires and/or faulty spark plug. | N/A |
| Vacuum leak. | Check for vacuum leaks by pressuizing the intake manifold with compressed air. Listen for leaks. | N/A |
| DME Computer | A faulty DME computer can cause a variety of starting and running problems. Normally, problems with the DME computer are the result of bad solder joints which can frequently be repaired. There's really no way to test the DME unless you can swap it into another vehicle or unless you can borrow a known good DME to install for testing purposes. And, even a good used DME computer is a little pricey. So, I don't like to run out and replace the DME unless I've eliminated all other possible causes. If you suspect the DME computer is bad, as a minimum, I would open it up and inspect for bad solder joints (and repair them) before replacing the computer. | [DME-05](https://www.clarks-garage.com/shop-manual/dme-05.htm) |

## Engine Oil Pressure Low.

|  |  |  |
| --- | --- | --- |
| **Possible Causes** | **Checks** | **Procedure** |
| Oil Level Low | Check oil level and top off if necessary. On 1987 and newer 944s, check for low oil level light lit. | [LUBE-03](/manual/engine/general-information-and-troubleshooting) |
| Crankshaft pulley bolt loose. | Check torque on crankshaft pulley bolt (155 ft-lbs). | [LUBE-03](/manual/engine/general-information-and-troubleshooting) |
| Bad oil pressure sending unit. | Check sending unit. | [LUBE-03](/manual/engine/general-information-and-troubleshooting)  [ELECT-19](/manual/electrical/gauge-troubleshooting) |
| Oil pump lost prime. | This is not uncommon with cars that have been sitting around for a while without being run. To prime the oil pump, remove the oil filter, and pour oil down the center hole of the oil filter housing while turning the crankshaft in the counter-clockwise direction. Install the oil filter (preferably a new one) when done and crank the engine to check for oil pressure. | [LUBE-03](/manual/engine/general-information-and-troubleshooting) |
| Bad or stuck open oil pressure relief valve. | There's really no way to check the oil pressure relief valve operation. About the only thing you can do is remove the relief valve, clean it, and reinstall it making sure it does not bind as you install it in the housing. | N/A |
| Worn engine bearings. | If engine oil pressure indications are fairly normal exept that the oil pressure indicates low when the engine is fully warmed up, the cause could be worn main and/or rod bearings. For normal bearing pressure indications take a look at LUBE-03. | [LUBE-03](/manual/engine/general-information-and-troubleshooting) |
| Broken oil pump pickup tube. | This is not a very common occurance and there's no way to check for it without removing the oil pan. Removing the pan to check the pickup tube is a last resort if all other attempts to restore oil pressure have failed. | N/A |
| Bad oil pump | The oil pumps on these cars are generally bullet proof. When they go bad, it's generally the result of losing prime to the oil pump which can destroy not only the pump but, the main and rod bearings as well. Again, this is one of those things that you can't really test for. All you can really do is remove the pump, disassemble it, and inspect the pump gears. | N/A |

## Engine Oil Pressure High.

|  |  |  |
| --- | --- | --- |
| **Possible Causes** | **Checks** | **Procedure** |
| Bad oil pressure sending unit | A bad sending unit is normally the cause for a high oil pressure indication. For symptoms of a bad sending unit and troubleshooting, check LUBE-03 and ELECT-19. | [LUBE-03](/manual/engine/general-information-and-troubleshooting)  [ELECT-19](/manual/electrical/gauge-troubleshooting) |
| Stuck closed oil pressure relief valve. | Not a very common problem. There's really no way to check the oil pressure relief valve operation. About the only thing you can do is remove the relief valve, clean it, and reinstall it making sure it does not bind as you install it in the housing. | N/A |
| Blocked oil passage. | About the only time I've seen this happen is when the check valve for the oil supply to the cylinder head sticks closed. When this happens, it will be accompanied by loud tapping noise from the hydraulic lifters. If the oil passage into the camshaft housing itself becomes blocked you'll typically see an oil leak at the cam assembly to cylinder head gasket. | N/A |
