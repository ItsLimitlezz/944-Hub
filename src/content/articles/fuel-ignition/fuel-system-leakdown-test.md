---
title: "Fuel System Leakdown Failure"
category: fuel-ignition
subsystem: "Fuel System"
author: CG
difficulty: intermediate
tools: [dme-diagnostic-adapter, durametric, fuel-pressure-gauge, multimeter]
sourceUrl: https://www.clarks-garage.com/shop-manual/fuel-17.htm
description: "Fuel System leakdown failures can be caused by a leaking fuel injector(s), a bad fuel pressure regulator (FPR), or a leaking fuel pump check valve. When this…"
code: FUEL-17
---

## Introduction

Fuel System leakdown failures can be caused by a leaking fuel injector(s), a bad fuel pressure regulator (FPR), or a leaking fuel pump check valve. When this happens, the fuel rail voids and the car is difficult to start when it's been sitting for a while. When the engine is turned over, if the fuel rail is voided, it takes the fuel pump a while to refill and clear the voids from the rail so that the car will get enough fuel to start.

Normally, if fuel rail voiding is caused by a leaking injector, you'll see lots of black smoke on subsequent startups. The following guide is intended to help you isolate fuel system leakdown problems.

## Tools

- Metric Wrench Set
- Metric Socket Set
- Hose Clamping Tool
- Fuel Pressure Gauge and (if necessary) adapter for fuel rail
- DME/Fuel Pump relay jumper
- Catch rags

## Test

1. Using [FUEL-01](/manual/fuel-ignition/checking-fuel-01), connect a fuel pressure gauge and install a DME/Fuel pump relay jumper to pressurize the fuel rail to normal operating pressure.
2. With the fuel system operating at normal pressure, remove the DME/Fuel pump relay jumper to stop the fuel pump.
3. Immediately install a hose clamping device on the rubber portion of the fuel line downstream of the Fuel Pressure Regulator (FPR). If you are unsure of the FPR location, see [FUEL-07](/manual/fuel-ignition/fuel-pressure-regulator-information-and-replacement) for pictures showing FPR locations. Note the fuel pressure and the time that you installed the hose clamp. This is the start time for the leakdown test.
4. After 20 minutes, note the fuel pressure and compare it to the specified value in [FUEL-01](/manual/fuel-ignition/checking-fuel-01). If you're performing this procedure due to a failed leakdown test, also compare the pressure to the failed leakdown test pressure. If this pressure still fails the leakdown test, then the source of the leakage is not the FPR and you should proceed to the next step. If the pressure results in a successful leakdown test (assuming it was failing leakdown tests before), then the FPR is leaking and needs to be replaced.
5. Remove the hose clamp from the FPR regulator line.
6. Install the DME/Fuel Pump Relay jumper to start the fuel pump and pressurize the fuel system.
7. With the fuel system pressurized, remove the DME/Fuel Pump Relay jumper to stop the fuel pump.
8. Immediately install a hose clamping device on the rubber portion of the fuel line upstream of the Fuel Dampener. If you are unsure of the Fuel Dampener location, see [FUEL-07](/manual/fuel-ignition/fuel-pressure-regulator-information-and-replacement) for pictures showing FPR locations. The Fuel Dampener looks almost identical to the FPR and is located either adjacent to the FPR on the fuel rail or at the opposite end of the fuel rail from the FPR. Note the fuel pressure and the time that you installed the hose clamp. This is the start time for the leakdown test.
9. After 20 minutes, note the fuel pressure and compare it to the specified value in [FUEL-01](/manual/fuel-ignition/checking-fuel-01). If you're performing this procedure due to a failed leakdown test, also compare the pressure to the failed leakdown test pressure. If this pressure still fails the leakdown test, then the source of the leakage is not the Fuel Dampener and you should proceed to the next step. If the pressure results in a successful leakdown test (assuming it was failing leakdown tests before), then the fuel pump check valve is leaking and needs to be replaced. The fuel pump check valve is threaded into the inlet of the fuel pump.
10. If the source of the fuel system leakdown is not the FPR or the Fuel Dampener, then it is most likely a leaking fuel injector.
11. To determine which injector is leaking, remove the fuel rail with the injectors still attached. This may will likely require you to disconnect the fuel rail supply and return lines.
12. One you have the fuel rail removed from the intake manifold (i.e. so you can see the tips of the injectors), reconnect the fuel supply and return lines to the rail.
13. Place catch rags under each injector tip.
14. Install the DME/Fuel Pump Relay jumper to start the fuel pump and note which injector(s) is leaking. Replace or refurbish as necessary.
