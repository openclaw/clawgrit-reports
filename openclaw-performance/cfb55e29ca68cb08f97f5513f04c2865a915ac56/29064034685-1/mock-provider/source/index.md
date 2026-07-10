# OpenClaw Source Performance

Generated: 2026-07-10T02:25:36.824Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6279.1ms | 6592.7ms | 6278.0ms | 6086.3ms | 6186.6ms | 39.4ms | 793.2MB | 1.274 |
| skipChannels | gateway, skip channels | 5806.9ms | 6094.4ms | 5806.5ms | 5677.4ms | 5770.5ms | 34.2ms | 814.0MB | 1.313 |
| oneInternalHook | gateway, one configured internal hook | 6152.6ms | 6323.4ms | 6141.8ms | 5779.2ms | 5843.5ms | 47.9ms | 826.6MB | 1.356 |
| allInternalHooks | gateway, all internal hooks | 5957.1ms | 6185.6ms | 5951.5ms | 5848.2ms | 5918.7ms | 55.0ms | 814.8MB | 1.293 |
| fiftyPlugins | gateway, 50 manifest plugins | 4666.9ms | 4977.6ms | 4665.4ms | 4506.9ms | 4584.4ms | 37.3ms | 807.2MB | 1.293 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4156.9ms | 4320.0ms | 4154.9ms | 4062.7ms | 4137.7ms | 36.3ms | 767.8MB | 1.224 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 448.9MB | 405.8MB | ok |
| llm-task | 426.7MB | 383.6MB | ok |
| migrate-hermes | 420.3MB | 377.1MB | ok |
| xai | 415.5MB | 372.4MB | ok |
| active-memory | 402.0MB | 358.9MB | ok |
| openai | 388.4MB | 345.3MB | ok |
| voice-call | 369.9MB | 326.8MB | ok |
| google | 360.0MB | 316.9MB | ok |
| minimax | 348.5MB | 305.4MB | ok |
| vydra | 316.2MB | 273.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 4982.9ms | 4990.4ms |
| default | cli.main.gateway-run-bootstrap | 3803.1ms | 4065.2ms |
| default | post-attach.update-sentinel.total | 1207.2ms | 1301.2ms |
| default | sidecars.restart-sentinel.total | 1206.2ms | 1300.4ms |
| default | sidecars.session-locks.total | 1204.7ms | 1299.5ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 4201.0ms | 4369.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 3328.8ms | 3443.5ms |
| skipChannels | post-attach.update-sentinel.total | 1366.4ms | 1586.8ms |
| skipChannels | sidecars.restart-sentinel.total | 1365.4ms | 1585.9ms |
| skipChannels | sidecars.session-locks.total | 1364.4ms | 1584.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4456.2ms | 4608.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3445.3ms | 3778.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 1613.6ms | 1708.0ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1612.8ms | 1707.1ms |
| oneInternalHook | sidecars.session-locks.total | 1611.5ms | 1705.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4344.0ms | 4492.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 3488.2ms | 3722.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 1802.3ms | 1802.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 1800.4ms | 1800.4ms |
| allInternalHooks | sidecars.session-locks.total | 1797.7ms | 1797.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3441.0ms | 3666.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2775.2ms | 2969.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 970.2ms | 1040.8ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 969.2ms | 1039.9ms |
| fiftyPlugins | sidecars.session-locks.total | 967.9ms | 1038.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3417.3ms | 3456.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2763.0ms | 2828.2ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 728.4ms | 767.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 634.6ms | 654.2ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 605.3ms | 609.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9341.0ms | 0.214 | 767.2MB | 803.7MB | 36.6MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8864.0ms | 0.113 | 816.1MB | 844.3MB | 28.1MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 9189.0ms | 0.109 | 738.3MB | 766.2MB | 27.9MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3359.1ms | 3615.2ms | 56.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 725.6ms | 747.8ms | 56.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.1ms | 53.5ms |

## Observations

No data.

