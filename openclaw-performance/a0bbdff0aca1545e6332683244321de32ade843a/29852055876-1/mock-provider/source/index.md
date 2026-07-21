# OpenClaw Source Performance

Generated: 2026-07-21T21:04:13.777Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8461.1ms | 9052.5ms | 8461.0ms | 4966.0ms | 8313.2ms | 61.3ms | 961.9MB | 1.436 |
| skipChannels | gateway, skip channels | 6150.4ms | 6285.5ms | 6150.3ms | 3438.3ms | 3486.7ms | 50.9ms | 915.2MB | 1.426 |
| oneInternalHook | gateway, one configured internal hook | 5906.9ms | 6303.8ms | 5906.8ms | 4447.9ms | 4521.8ms | 48.6ms | 958.1MB | 1.354 |
| allInternalHooks | gateway, all internal hooks | 5752.1ms | 6689.2ms | 5752.0ms | 4364.9ms | 4435.2ms | 43.1ms | 959.8MB | 1.345 |
| fiftyPlugins | gateway, 50 manifest plugins | 6328.1ms | 6425.8ms | 6328.1ms | 4086.7ms | 4167.5ms | 42.6ms | 1100.2MB | 1.273 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6225.9ms | 6450.8ms | 6225.9ms | 3889.7ms | 3974.5ms | 46.7ms | 1077.6MB | 1.289 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| teams-meetings | 511.8MB | 465.3MB | ok |
| codex | 509.6MB | 463.1MB | ok |
| workboard | 507.4MB | 461.0MB | ok |
| anthropic | 507.2MB | 460.7MB | ok |
| llm-task | 504.7MB | 458.2MB | ok |
| voice-call | 503.2MB | 456.8MB | ok |
| active-memory | 502.7MB | 456.2MB | ok |
| google-meet | 502.6MB | 456.1MB | ok |
| zoom-meetings | 501.8MB | 455.3MB | ok |
| migrate-hermes | 501.5MB | 455.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4491.8ms | 5040.8ms |
| default | post-ready.agent-runtime-plugins.total | 4465.9ms | 5013.5ms |
| default | post-attach.update-check.total | 4461.6ms | 5009.8ms |
| default | post-attach.update-sentinel.total | 4452.4ms | 5000.4ms |
| default | sidecars.restart-sentinel.total | 4450.9ms | 4999.0ms |
| skipChannels | sidecars.session-locks.total | 3702.5ms | 3803.3ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3699.3ms | 3800.0ms |
| skipChannels | post-attach.update-sentinel.total | 3690.3ms | 3793.3ms |
| skipChannels | sidecars.restart-sentinel.total | 3688.8ms | 3791.9ms |
| skipChannels | sidecars.ready.total | 3662.7ms | 3762.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3446.4ms | 3658.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2784.9ms | 2949.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2758.2ms | 2921.7ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2757.4ms | 2920.7ms |
| oneInternalHook | sidecars.session-locks.total | 2242.3ms | 2311.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3414.7ms | 3822.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2663.7ms | 3059.9ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2633.8ms | 3030.2ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2632.9ms | 3028.9ms |
| allInternalHooks | sidecars.session-locks.total | 2075.1ms | 2535.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3019.9ms | 3180.0ms |
| fiftyPlugins | sidecars.session-locks.total | 2985.7ms | 3004.1ms |
| fiftyPlugins | post-ready.maintenance.total | 2900.5ms | 2927.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 2886.4ms | 2913.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2708.3ms | 2734.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3088.2ms | 3265.9ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2843.2ms | 2857.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 2757.9ms | 2773.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 2744.1ms | 2758.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2526.3ms | 2540.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9381.0ms | 0.000 | 2420.3MB | 932.7MB | -1487.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9164.0ms | 0.218 | 851.7MB | 930.9MB | 79.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8955.0ms | 0.223 | 845.2MB | 922.5MB | 77.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3260.7ms | 3386.9ms | 60.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 793.5ms | 819.6ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.0ms | 68.0ms |

## Observations

No data.

