# OpenClaw Source Performance

Generated: 2026-07-31T01:31:00.438Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6049.8ms | 6182.1ms | 6049.6ms | 3003.0ms | 3072.7ms | 214.0ms | 1027.6MB | 1.348 |
| skipChannels | gateway, skip channels | 3075.9ms | 6747.1ms | 3075.3ms | 3001.6ms | 3011.0ms | 211.1ms | 1041.6MB | 1.355 |
| oneInternalHook | gateway, one configured internal hook | 4310.9ms | 4390.8ms | 4310.6ms | 4250.6ms | 4259.0ms | 205.3ms | 899.0MB | 1.393 |
| allInternalHooks | gateway, all internal hooks | 4856.4ms | 7251.0ms | 4825.9ms | 4737.5ms | 4749.9ms | 246.3ms | 1154.5MB | 1.441 |
| fiftyPlugins | gateway, 50 manifest plugins | 3860.3ms | 3956.2ms | 3860.1ms | 3258.0ms | 3304.1ms | 243.3ms | 919.5MB | 1.517 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3820.6ms | 3932.7ms | 3820.3ms | 3173.2ms | 3238.4ms | 235.1ms | 986.0MB | 1.526 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| openai | 578.3MB | 532.3MB | ok |
| opencode | 564.3MB | 518.3MB | ok |
| anthropic | 544.9MB | 498.9MB | ok |
| acpx | 539.8MB | 493.8MB | ok |
| active-memory | 537.7MB | 491.7MB | ok |
| codex | 533.6MB | 487.6MB | ok |
| google-meet | 523.8MB | 477.8MB | ok |
| memory-lancedb | 522.1MB | 476.1MB | ok |
| migrate-hermes | 512.8MB | 466.9MB | ok |
| workboard | 510.1MB | 464.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-ready.gateway-data.session-catalog.main.total | 4026.1ms | 4090.7ms |
| default | post-ready.gateway-data.plugins.total | 4018.2ms | 4057.0ms |
| default | sidecars.session-locks.total | 3914.8ms | 3944.0ms |
| default | post-ready.agent-runtime-plugins.total | 3782.0ms | 3816.2ms |
| default | post-ready.gateway-data.sessions.main.total | 3738.7ms | 3770.0ms |
| skipChannels | post-ready.gateway-data.plugins.total | 4490.5ms | 4490.5ms |
| skipChannels | sidecars.session-locks.total | 4360.0ms | 4360.0ms |
| skipChannels | post-ready.maintenance.total | 4207.9ms | 4207.9ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4185.0ms | 4185.0ms |
| skipChannels | post-ready.gateway-data.sessions.main.total | 4141.5ms | 4141.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3168.7ms | 3218.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2623.5ms | 2657.8ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2592.1ms | 2635.8ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2591.2ms | 2634.9ms |
| oneInternalHook | sidecars.ready.total | 1234.1ms | 1248.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3542.9ms | 3580.0ms |
| allInternalHooks | post-ready.gateway-data.plugins.total | 3541.6ms | 3541.6ms |
| allInternalHooks | sidecars.session-locks.total | 3410.3ms | 3410.3ms |
| allInternalHooks | post-ready.maintenance.total | 3284.4ms | 3284.4ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3262.3ms | 3262.3ms |
| fiftyPlugins | post-ready.gateway-data.plugins.total | 1605.7ms | 1644.6ms |
| fiftyPlugins | sidecars.session-locks.total | 1477.9ms | 1493.9ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 1376.9ms | 1378.4ms |
| fiftyPlugins | post-ready.gateway-data.sessions.main.total | 1178.6ms | 1184.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1168.8ms | 1178.0ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins.total | 1437.9ms | 1497.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 1338.5ms | 1398.0ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 1239.3ms | 1289.4ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.sessions.main.total | 1048.6ms | 1088.8ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 1041.8ms | 1080.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11852.0ms | 0.000 | 2836.4MB | 1130.8MB | -1705.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10976.0ms | 0.091 | 1085.7MB | 1105.1MB | 19.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11141.0ms | 0.090 | 1049.8MB | 1070.9MB | 21.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 618.9ms | 644.6ms | 186.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 820.4ms | 831.8ms | 187.0MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 137.1ms |

## Observations

No data.

