# OpenClaw Source Performance

Generated: 2026-07-16T09:14:20.541Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4129.0ms | 4258.5ms | 4128.9ms | 3845.1ms | 3941.0ms | 55.7ms | 811.7MB | 1.560 |
| skipChannels | gateway, skip channels | 4691.7ms | 4711.4ms | 4691.6ms | 4322.1ms | 4386.1ms | 64.1ms | 799.1MB | 1.492 |
| oneInternalHook | gateway, one configured internal hook | 5129.0ms | 5197.7ms | 5128.7ms | 4829.7ms | 4884.3ms | 56.5ms | 920.7MB | 1.373 |
| allInternalHooks | gateway, all internal hooks | 5866.1ms | 5907.2ms | 5866.0ms | 5497.9ms | 5576.4ms | 49.2ms | 932.8MB | 1.468 |
| fiftyPlugins | gateway, 50 manifest plugins | 5511.9ms | 5757.0ms | 5511.7ms | 4985.0ms | 5084.0ms | 46.5ms | 934.6MB | 1.393 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6119.3ms | 6198.7ms | 6119.3ms | 5389.3ms | 5508.8ms | 53.7ms | 955.7MB | 1.471 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 526.1MB | 479.8MB | ok |
| codex | 517.5MB | 471.2MB | ok |
| active-memory | 515.2MB | 468.8MB | ok |
| llm-task | 513.2MB | 466.9MB | ok |
| xai | 512.0MB | 465.7MB | ok |
| migrate-hermes | 510.5MB | 464.1MB | ok |
| anthropic | 510.3MB | 463.9MB | ok |
| openai | 451.9MB | 405.6MB | ok |
| google | 427.8MB | 381.5MB | ok |
| voice-call | 424.5MB | 378.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-attach.update-sentinel.total | 1165.8ms | 1283.7ms |
| default | sidecars.restart-sentinel.total | 1165.0ms | 1282.9ms |
| default | sidecars.session-locks.total | 1164.1ms | 1281.9ms |
| default | post-ready.agent-runtime-plugins.total | 1161.6ms | 1279.4ms |
| default | post-attach.update-check.total | 1087.2ms | 1205.7ms |
| skipChannels | post-attach.update-sentinel.total | 1348.4ms | 1379.2ms |
| skipChannels | sidecars.restart-sentinel.total | 1347.6ms | 1378.1ms |
| skipChannels | sidecars.session-locks.total | 1346.6ms | 1376.6ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 1344.7ms | 1373.4ms |
| skipChannels | sidecars.ready.total | 1208.6ms | 1241.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3814.0ms | 3898.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3037.6ms | 3086.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 3003.8ms | 3051.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 3002.8ms | 3050.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 895.8ms | 901.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4351.4ms | 4423.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 3503.9ms | 3526.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 3460.6ms | 3485.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 3459.3ms | 3484.0ms |
| allInternalHooks | post-attach.update-sentinel.total | 1099.7ms | 1112.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3481.9ms | 3766.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2743.8ms | 3017.3ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2711.3ms | 2981.0ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2710.1ms | 2979.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1476.1ms | 1586.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 4257.0ms | 4418.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 3376.5ms | 3461.4ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 3324.4ms | 3395.6ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 3323.3ms | 3394.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 1241.1ms | 1367.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11095.0ms | 0.000 | 2395.3MB | 959.4MB | -1436.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10086.0ms | 0.099 | 818.2MB | 847.4MB | 29.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9935.0ms | 0.101 | 928.6MB | 955.7MB | 27.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4307.5ms | 5703.2ms | 62.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1209.1ms | 1677.9ms | 62.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.9MB | 0.0MB | 0.1ms | 95.2ms |

## Observations

No data.

