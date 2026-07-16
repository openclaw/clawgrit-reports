# OpenClaw Source Performance

Generated: 2026-07-16T15:22:43.484Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5367.2ms | 5943.9ms | 5366.9ms | 4960.3ms | 5106.7ms | 63.4ms | 752.5MB | 1.514 |
| skipChannels | gateway, skip channels | 4502.9ms | 5171.2ms | 4502.4ms | 4229.0ms | 4292.3ms | 63.1ms | 755.6MB | 1.555 |
| oneInternalHook | gateway, one configured internal hook | 5398.6ms | 6432.2ms | 5398.5ms | 5101.3ms | 5153.7ms | 63.8ms | 934.5MB | 1.399 |
| allInternalHooks | gateway, all internal hooks | 5631.7ms | 5805.4ms | 5631.7ms | 5366.2ms | 5415.4ms | 49.8ms | 927.1MB | 1.421 |
| fiftyPlugins | gateway, 50 manifest plugins | 6281.8ms | 7238.1ms | 6281.7ms | 5707.0ms | 5835.1ms | 67.4ms | 996.7MB | 1.520 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6023.7ms | 6591.8ms | 6021.1ms | 5335.4ms | 5448.2ms | 62.2ms | 969.5MB | 1.517 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 519.8MB | 473.4MB | ok |
| codex | 519.4MB | 472.9MB | ok |
| xai | 519.2MB | 472.7MB | ok |
| memory-lancedb | 517.8MB | 471.4MB | ok |
| active-memory | 514.7MB | 468.3MB | ok |
| anthropic | 513.1MB | 466.7MB | ok |
| migrate-hermes | 509.2MB | 462.7MB | ok |
| workboard | 507.2MB | 460.8MB | ok |
| openai | 428.6MB | 382.1MB | ok |
| google | 428.4MB | 381.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-attach.update-sentinel.total | 1430.7ms | 1547.5ms |
| default | sidecars.restart-sentinel.total | 1429.9ms | 1546.2ms |
| default | sidecars.session-locks.total | 1428.6ms | 1544.2ms |
| default | post-ready.agent-runtime-plugins.total | 1425.3ms | 1539.8ms |
| default | cli.main.gateway-run-bootstrap.total | 1370.3ms | 1464.7ms |
| skipChannels | post-attach.update-sentinel.total | 1239.3ms | 1522.1ms |
| skipChannels | sidecars.restart-sentinel.total | 1238.6ms | 1521.3ms |
| skipChannels | sidecars.session-locks.total | 1237.7ms | 1520.2ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 1236.1ms | 1518.1ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 1181.3ms | 1256.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3979.7ms | 4993.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3149.7ms | 4120.0ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 3114.5ms | 4076.8ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 3113.5ms | 4075.8ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 976.5ms | 987.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4245.8ms | 4312.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 3309.7ms | 3524.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 3266.5ms | 3486.2ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 3265.5ms | 3485.3ms |
| allInternalHooks | post-attach.update-sentinel.total | 928.1ms | 1043.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 4425.0ms | 4482.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 3512.3ms | 3643.0ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 3456.3ms | 3586.0ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 3454.7ms | 3583.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1388.0ms | 1999.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 4223.4ms | 4730.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 3312.2ms | 3703.1ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 3271.9ms | 3665.4ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 3270.7ms | 3664.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 1232.7ms | 1248.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11711.0ms | 0.000 | 2448.7MB | 970.9MB | -1477.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10321.0ms | 0.194 | 915.4MB | 942.6MB | 27.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10889.0ms | 0.184 | 924.1MB | 951.0MB | 27.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 5232.1ms | 6958.7ms | 63.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1086.7ms | 1134.9ms | 63.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 64.3ms |

## Observations

No data.

