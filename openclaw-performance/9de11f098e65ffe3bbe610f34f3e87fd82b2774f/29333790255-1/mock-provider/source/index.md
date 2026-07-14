# OpenClaw Source Performance

Generated: 2026-07-14T12:52:20.795Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4133.7ms | 4212.2ms | 4127.9ms | 3910.5ms | 3985.8ms | 51.0ms | 751.9MB | 1.466 |
| skipChannels | gateway, skip channels | 4203.3ms | 5926.3ms | 4203.1ms | 3975.7ms | 4029.6ms | 58.0ms | 764.3MB | 1.519 |
| oneInternalHook | gateway, one configured internal hook | 7709.8ms | 8992.5ms | 7709.7ms | 7201.9ms | 7318.1ms | 80.8ms | 900.8MB | 1.447 |
| allInternalHooks | gateway, all internal hooks | 6618.1ms | 7195.0ms | 6618.0ms | 6254.3ms | 6324.5ms | 57.8ms | 909.8MB | 1.529 |
| fiftyPlugins | gateway, 50 manifest plugins | 5738.0ms | 6879.3ms | 5737.9ms | 5266.3ms | 5360.6ms | 59.0ms | 935.6MB | 1.454 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4476.3ms | 4574.5ms | 4476.2ms | 3973.8ms | 4054.8ms | 45.5ms | 848.3MB | 1.371 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| qa-lab | 546.2MB | 499.7MB | ok |
| codex | 520.1MB | 473.6MB | ok |
| migrate-hermes | 519.3MB | 472.8MB | ok |
| workboard | 517.1MB | 470.6MB | ok |
| llm-task | 515.1MB | 468.6MB | ok |
| anthropic | 511.2MB | 464.7MB | ok |
| active-memory | 507.6MB | 461.1MB | ok |
| xai | 507.5MB | 461.0MB | ok |
| openai | 441.3MB | 394.8MB | ok |
| google | 423.8MB | 377.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 1179.7ms | 1293.2ms |
| default | post-attach.update-sentinel.total | 1132.9ms | 1145.5ms |
| default | sidecars.restart-sentinel.total | 1131.8ms | 1144.8ms |
| default | sidecars.session-locks.total | 1130.7ms | 1144.0ms |
| default | post-ready.agent-runtime-plugins.total | 1127.9ms | 1142.1ms |
| skipChannels | post-attach.update-sentinel.total | 1087.8ms | 1906.1ms |
| skipChannels | sidecars.restart-sentinel.total | 1086.9ms | 1904.6ms |
| skipChannels | sidecars.session-locks.total | 1085.4ms | 1902.9ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 1074.9ms | 1899.9ms |
| skipChannels | sidecars.subagent-recovery.total | 1009.9ms | 1751.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 5791.7ms | 6682.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 4652.0ms | 5425.5ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 4578.1ms | 5351.3ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 4576.4ms | 5350.2ms |
| oneInternalHook | post-attach.update-sentinel.total | 1416.9ms | 1621.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 5117.2ms | 5194.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 4112.2ms | 4196.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 4052.7ms | 4155.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 4051.4ms | 4154.3ms |
| allInternalHooks | post-attach.update-sentinel.total | 1159.0ms | 1483.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3963.2ms | 4355.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 3111.9ms | 3277.7ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 3079.4ms | 3239.5ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 3077.9ms | 3238.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1307.9ms | 1937.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3252.4ms | 3350.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2521.8ms | 2613.5ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2491.2ms | 2582.0ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2490.3ms | 2581.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 851.7ms | 858.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9702.0ms | 0.000 | 2366.5MB | 942.9MB | -1423.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8887.0ms | 0.113 | 884.4MB | 908.9MB | 24.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8971.0ms | 0.223 | 906.9MB | 934.6MB | 27.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3508.2ms | 4889.5ms | 62.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 775.4ms | 780.9ms | 66.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.9MB | 0.0MB | 0.1ms | 40.8ms |

## Observations

No data.

