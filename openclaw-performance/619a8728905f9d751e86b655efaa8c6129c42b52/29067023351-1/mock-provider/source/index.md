# OpenClaw Source Performance

Generated: 2026-07-10T03:46:58.683Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4766.4ms | 5016.5ms | 4765.1ms | 4579.0ms | 4693.0ms | 34.8ms | 818.6MB | 1.310 |
| skipChannels | gateway, skip channels | 4593.9ms | 4804.7ms | 4590.7ms | 4516.8ms | 4555.7ms | 36.3ms | 812.6MB | 1.249 |
| oneInternalHook | gateway, one configured internal hook | 4415.6ms | 4535.9ms | 4407.3ms | 4336.0ms | 4379.5ms | 34.7ms | 824.8MB | 1.323 |
| allInternalHooks | gateway, all internal hooks | 4624.3ms | 5103.4ms | 4744.2ms | 4515.7ms | 4552.8ms | 36.2ms | 797.5MB | 1.265 |
| fiftyPlugins | gateway, 50 manifest plugins | 4547.4ms | 4691.4ms | 4542.9ms | 4368.0ms | 4466.7ms | 35.5ms | 791.4MB | 1.319 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4473.5ms | 5571.1ms | 4420.1ms | 4331.5ms | 4405.4ms | 38.3ms | 782.7MB | 1.256 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 447.6MB | 404.5MB | ok |
| migrate-hermes | 421.9MB | 378.8MB | ok |
| xai | 417.1MB | 374.0MB | ok |
| active-memory | 406.0MB | 362.9MB | ok |
| llm-task | 400.0MB | 356.9MB | ok |
| openai | 399.9MB | 356.9MB | ok |
| google | 360.3MB | 317.3MB | ok |
| voice-call | 356.0MB | 312.9MB | ok |
| minimax | 355.7MB | 312.6MB | ok |
| vydra | 309.3MB | 266.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 3444.1ms | 3678.7ms |
| default | cli.main.gateway-run-bootstrap | 2801.8ms | 3008.9ms |
| default | post-attach.update-sentinel.total | 1057.6ms | 1073.9ms |
| default | sidecars.restart-sentinel.total | 1056.9ms | 1073.1ms |
| default | sidecars.session-locks.total | 1056.0ms | 1072.2ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 3419.9ms | 3429.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2750.1ms | 2776.5ms |
| skipChannels | post-attach.update-sentinel.total | 1114.1ms | 1116.7ms |
| skipChannels | sidecars.restart-sentinel.total | 1113.3ms | 1116.0ms |
| skipChannels | sidecars.session-locks.total | 1112.1ms | 1115.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3256.6ms | 3336.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2652.8ms | 2700.1ms |
| oneInternalHook | sidecars.internal-hooks.total | 1083.8ms | 1100.9ms |
| oneInternalHook | post-attach.update-check.total | 905.3ms | 930.2ms |
| oneInternalHook | ready.total | 884.9ms | 920.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3335.2ms | 3693.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2703.0ms | 2954.3ms |
| allInternalHooks | post-attach.update-sentinel.total | 1167.2ms | 1167.2ms |
| allInternalHooks | sidecars.restart-sentinel.total | 1166.5ms | 1166.5ms |
| allInternalHooks | sidecars.session-locks.total | 1165.5ms | 1165.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3395.6ms | 3493.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2731.1ms | 2803.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 934.8ms | 939.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 933.9ms | 938.8ms |
| fiftyPlugins | sidecars.session-locks.total | 932.9ms | 938.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3700.9ms | 4655.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2942.6ms | 3944.6ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 764.5ms | 773.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 710.8ms | 758.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 635.2ms | 675.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10721.0ms | 0.187 | 779.6MB | 807.7MB | 28.1MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 9452.0ms | 0.212 | 735.4MB | 763.8MB | 28.4MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 9053.0ms | 0.221 | 734.7MB | 756.7MB | 22.0MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3410.5ms | 3944.2ms | 56.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 755.6ms | 884.8ms | 56.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.1ms | 55.9ms |

## Observations

No data.

