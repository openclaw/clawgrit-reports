# OpenClaw Source Performance

Generated: 2026-07-30T15:29:43.191Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8933.5ms | 9859.7ms | 8928.3ms | 4372.5ms | 4540.2ms | 284.8ms | 1042.2MB | 1.455 |
| skipChannels | gateway, skip channels | 7697.8ms | 8632.2ms | 7697.1ms | 3868.1ms | 3880.1ms | 284.1ms | 990.1MB | 1.416 |
| oneInternalHook | gateway, one configured internal hook | 5824.9ms | 9415.9ms | 5824.4ms | 5746.4ms | 5768.2ms | 285.9ms | 1138.0MB | 1.421 |
| allInternalHooks | gateway, all internal hooks | 9773.5ms | 9797.7ms | 9797.8ms | 6050.5ms | 6063.0ms | 290.9ms | 1178.8MB | 1.477 |
| fiftyPlugins | gateway, 50 manifest plugins | 4587.8ms | 5008.7ms | 4585.6ms | 3897.5ms | 3955.7ms | 310.1ms | 874.2MB | 1.526 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4268.2ms | 4809.1ms | 4267.9ms | 3539.4ms | 3611.6ms | 260.1ms | 1012.3MB | 1.487 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 565.3MB | 519.3MB | ok |
| xai | 542.4MB | 496.4MB | ok |
| anthropic | 541.5MB | 495.6MB | ok |
| google-meet | 539.8MB | 493.9MB | ok |
| workboard | 531.4MB | 485.5MB | ok |
| openai | 531.0MB | 485.0MB | ok |
| active-memory | 528.3MB | 482.3MB | ok |
| memory-lancedb | 528.3MB | 482.3MB | ok |
| voice-call | 527.8MB | 481.8MB | ok |
| codex | 522.3MB | 476.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-ready.maintenance.total | 6924.7ms | 6924.7ms |
| default | post-ready.context-window-cache.total | 6748.6ms | 6748.6ms |
| default | post-ready.gateway-data.session-catalog.main.total | 6010.6ms | 6904.7ms |
| default | post-ready.gateway-data.plugins.total | 5650.1ms | 6853.5ms |
| default | sidecars.session-locks.total | 5492.6ms | 6627.2ms |
| skipChannels | post-ready.gateway-data.session-catalog.main.total | 5825.4ms | 5825.4ms |
| skipChannels | post-ready.gateway-data.plugins.total | 5458.1ms | 5765.5ms |
| skipChannels | sidecars.session-locks.total | 5297.9ms | 5622.3ms |
| skipChannels | post-ready.maintenance.total | 5115.3ms | 5415.2ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5089.0ms | 5388.4ms |
| oneInternalHook | post-ready.gateway-data.plugins.total | 4583.6ms | 4583.6ms |
| oneInternalHook | sidecars.session-locks.total | 4383.8ms | 4383.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4249.1ms | 4473.1ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 4248.8ms | 4248.8ms |
| oneInternalHook | post-ready.gateway-data.sessions.main.total | 4187.6ms | 4187.6ms |
| allInternalHooks | post-ready.gateway-data.session-catalog.main.total | 4815.3ms | 5009.8ms |
| allInternalHooks | post-ready.gateway-data.plugins.total | 4760.6ms | 4947.7ms |
| allInternalHooks | post-ready.maintenance.total | 4702.1ms | 5126.0ms |
| allInternalHooks | sidecars.session-locks.total | 4622.6ms | 4797.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4578.6ms | 4623.8ms |
| fiftyPlugins | post-ready.gateway-data.session-catalog.main.total | 1848.7ms | 1848.7ms |
| fiftyPlugins | post-ready.gateway-data.plugins.total | 1840.6ms | 1879.1ms |
| fiftyPlugins | sidecars.session-locks.total | 1716.4ms | 1756.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 1600.6ms | 1638.7ms |
| fiftyPlugins | post-ready.gateway-data.sessions.main.total | 1389.5ms | 1417.3ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins.total | 1739.6ms | 1940.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 1561.2ms | 1817.2ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 1435.5ms | 1684.4ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.sessions.main.total | 1216.7ms | 1451.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 1208.9ms | 1443.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 15244.0ms | 0.000 | 2607.6MB | 1173.4MB | -1434.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 14110.0ms | 0.142 | 921.2MB | 978.4MB | 57.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12728.0ms | 0.157 | 1040.5MB | 1180.2MB | 139.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 793.6ms | 813.1ms | 187.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 955.8ms | 1080.1ms | 186.9MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 176.7ms |

## Observations

No data.

