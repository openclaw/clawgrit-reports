# OpenClaw Source Performance

Generated: 2026-07-10T00:00:22.442Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4890.2ms | 5967.2ms | 4889.5ms | 4677.0ms | 4773.6ms | 44.4ms | 807.1MB | 1.341 |
| skipChannels | gateway, skip channels | 5419.4ms | 5705.1ms | 5418.9ms | 5343.9ms | 5387.8ms | 48.5ms | 812.7MB | 1.292 |
| oneInternalHook | gateway, one configured internal hook | 5647.4ms | 5671.2ms | 5647.4ms | 5407.6ms | 5491.5ms | 46.0ms | 818.4MB | 1.310 |
| allInternalHooks | gateway, all internal hooks | 4991.0ms | 5022.7ms | 4907.5ms | 4812.3ms | 4861.1ms | 50.2ms | 842.6MB | 1.265 |
| fiftyPlugins | gateway, 50 manifest plugins | 4950.8ms | 5013.9ms | 4950.7ms | 4746.9ms | 4824.6ms | 46.3ms | 795.3MB | 1.252 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4189.1ms | 4591.2ms | 4188.0ms | 4051.9ms | 4130.7ms | 42.8ms | 734.8MB | 1.307 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 446.2MB | 403.0MB | ok |
| migrate-hermes | 427.0MB | 383.8MB | ok |
| xai | 421.3MB | 378.0MB | ok |
| llm-task | 406.9MB | 363.7MB | ok |
| active-memory | 400.8MB | 357.6MB | ok |
| openai | 383.7MB | 340.5MB | ok |
| voice-call | 371.2MB | 328.0MB | ok |
| google | 364.4MB | 321.2MB | ok |
| minimax | 348.8MB | 305.5MB | ok |
| xiaomi | 314.5MB | 271.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 3383.8ms | 4583.0ms |
| default | cli.main.gateway-run-bootstrap | 2702.0ms | 3825.5ms |
| default | post-attach.update-sentinel.total | 1103.5ms | 1208.4ms |
| default | sidecars.restart-sentinel.total | 1102.6ms | 1207.5ms |
| default | sidecars.session-locks.total | 1101.4ms | 1206.4ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 4141.0ms | 4381.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 3391.4ms | 3666.7ms |
| skipChannels | post-attach.update-sentinel.total | 1249.3ms | 1321.5ms |
| skipChannels | sidecars.restart-sentinel.total | 1248.6ms | 1320.3ms |
| skipChannels | sidecars.session-locks.total | 1247.7ms | 1318.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4061.4ms | 4068.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3351.0ms | 3393.5ms |
| oneInternalHook | post-attach.update-sentinel.total | 1423.8ms | 1446.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1423.0ms | 1445.9ms |
| oneInternalHook | sidecars.session-locks.total | 1421.7ms | 1444.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3670.8ms | 3889.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 3051.9ms | 3175.7ms |
| allInternalHooks | post-attach.update-check.total | 939.1ms | 980.7ms |
| allInternalHooks | ready.total | 915.5ms | 967.8ms |
| allInternalHooks | runtime.post-attach.total | 913.2ms | 966.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3656.5ms | 3821.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2908.1ms | 3145.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 920.2ms | 1079.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 919.3ms | 1078.2ms |
| fiftyPlugins | sidecars.session-locks.total | 918.1ms | 1076.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3363.6ms | 3798.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2739.6ms | 2985.3ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 723.7ms | 726.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 660.6ms | 812.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 590.6ms | 733.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9325.0ms | 0.107 | 786.7MB | 812.0MB | 25.3MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8475.0ms | 0.118 | 792.4MB | 820.6MB | 28.2MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 8257.0ms | 0.121 | 774.0MB | 806.2MB | 32.2MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3353.2ms | 3692.1ms | 57.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 632.3ms | 652.6ms | 57.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.0ms | 40.7ms |

## Observations

No data.

