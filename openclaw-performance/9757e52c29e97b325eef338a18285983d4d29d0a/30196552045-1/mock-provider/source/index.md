# OpenClaw Source Performance

Generated: 2026-07-26T09:35:51.581Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6045.3ms | 6113.7ms | 6045.2ms | 3160.8ms | 5934.9ms | 43.5ms | 1056.3MB | 1.325 |
| skipChannels | gateway, skip channels | 6218.3ms | 6245.0ms | 6218.2ms | 3166.8ms | 3210.9ms | 42.2ms | 1015.8MB | 1.287 |
| oneInternalHook | gateway, one configured internal hook | 4640.1ms | 6704.0ms | 4639.9ms | 4525.2ms | 4566.7ms | 43.4ms | 1086.5MB | 1.303 |
| allInternalHooks | gateway, all internal hooks | 4669.8ms | 6822.2ms | 4669.3ms | 4561.8ms | 4604.6ms | 42.5ms | 1175.6MB | 1.305 |
| fiftyPlugins | gateway, 50 manifest plugins | 8380.5ms | 8483.7ms | 8380.4ms | 4448.3ms | 4525.9ms | 41.8ms | 1146.2MB | 1.206 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8197.1ms | 8270.1ms | 8197.0ms | 4160.6ms | 4240.8ms | 43.1ms | 1128.2MB | 1.220 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 536.9MB | 490.5MB | ok |
| opencode | 520.5MB | 474.0MB | ok |
| codex | 518.9MB | 472.4MB | ok |
| voice-call | 511.8MB | 465.4MB | ok |
| anthropic | 511.6MB | 465.1MB | ok |
| workboard | 511.5MB | 465.0MB | ok |
| google-meet | 508.8MB | 462.3MB | ok |
| llm-task | 506.5MB | 460.0MB | ok |
| migrate-hermes | 506.0MB | 459.6MB | ok |
| acpx | 505.8MB | 459.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3803.4ms | 3886.3ms |
| default | post-ready.agent-runtime-plugins.total | 3777.1ms | 3859.7ms |
| default | post-attach.update-check.total | 3774.4ms | 3857.0ms |
| default | post-attach.update-sentinel.total | 3765.9ms | 3848.3ms |
| default | sidecars.restart-sentinel.total | 3764.9ms | 3847.3ms |
| skipChannels | sidecars.session-locks.total | 3998.1ms | 4003.5ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3996.4ms | 4001.7ms |
| skipChannels | post-attach.update-sentinel.total | 3992.2ms | 3997.5ms |
| skipChannels | sidecars.restart-sentinel.total | 3991.2ms | 3996.6ms |
| skipChannels | sidecars.ready.total | 3979.3ms | 3985.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3402.5ms | 3424.6ms |
| oneInternalHook | sidecars.session-locks.total | 2990.7ms | 2990.7ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2988.9ms | 2988.9ms |
| oneInternalHook | post-attach.update-sentinel.total | 2984.7ms | 2984.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2983.7ms | 2983.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3428.1ms | 3441.5ms |
| allInternalHooks | sidecars.session-locks.total | 3050.6ms | 3050.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3048.9ms | 3048.9ms |
| allInternalHooks | post-attach.update-sentinel.total | 3044.5ms | 3044.5ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3043.5ms | 3043.5ms |
| fiftyPlugins | sidecars.session-locks.total | 4892.8ms | 4918.5ms |
| fiftyPlugins | post-ready.maintenance.total | 4803.4ms | 4831.2ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4768.9ms | 4793.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4568.9ms | 4594.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4568.0ms | 4593.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4708.7ms | 4720.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4622.0ms | 4628.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4586.1ms | 4591.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4388.8ms | 4390.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4387.8ms | 4389.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11088.0ms | 0.000 | 2509.9MB | 1058.8MB | -1451.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10369.0ms | 0.096 | 916.4MB | 1013.8MB | 97.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10424.0ms | 0.096 | 910.8MB | 1039.2MB | 128.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3371.6ms | 3470.1ms | 61.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 843.4ms | 854.8ms | 61.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 126.1ms |

## Observations

No data.

