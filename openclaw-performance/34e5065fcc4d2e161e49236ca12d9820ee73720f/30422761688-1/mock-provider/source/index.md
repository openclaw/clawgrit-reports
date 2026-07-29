# OpenClaw Source Performance

Generated: 2026-07-29T04:43:13.504Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6400.3ms | 6411.9ms | 6400.2ms | 3044.7ms | 5950.9ms | 219.6ms | 1039.3MB | 1.313 |
| skipChannels | gateway, skip channels | 3138.8ms | 6423.9ms | 3122.5ms | 3025.2ms | 3041.8ms | 219.2ms | 1006.4MB | 1.329 |
| oneInternalHook | gateway, one configured internal hook | 4812.5ms | 4837.1ms | 4808.4ms | 4721.5ms | 4728.1ms | 230.9ms | 1032.7MB | 1.455 |
| allInternalHooks | gateway, all internal hooks | 4479.2ms | 5084.5ms | 4478.9ms | 4423.3ms | 4429.3ms | 214.8ms | 978.3MB | 1.386 |
| fiftyPlugins | gateway, 50 manifest plugins | 8297.6ms | 8377.7ms | 8297.5ms | 4232.2ms | 4275.0ms | 217.7ms | 1143.0MB | 1.313 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8482.3ms | 8700.5ms | 8482.3ms | 4211.2ms | 4265.8ms | 226.7ms | 1063.8MB | 1.297 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 542.0MB | 495.5MB | ok |
| codex | 540.4MB | 494.0MB | ok |
| openai | 534.6MB | 488.1MB | ok |
| voice-call | 531.8MB | 485.3MB | ok |
| opencode | 525.9MB | 479.5MB | ok |
| acpx | 513.7MB | 467.2MB | ok |
| xai | 510.2MB | 463.8MB | ok |
| workboard | 508.3MB | 461.9MB | ok |
| teams-meetings | 508.3MB | 461.8MB | ok |
| migrate-hermes | 506.8MB | 460.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4216.0ms | 4294.7ms |
| default | post-ready.agent-runtime-plugins.total | 4188.2ms | 4278.6ms |
| default | post-attach.update-check.total | 4184.7ms | 4275.1ms |
| default | post-attach.update-sentinel.total | 3883.2ms | 3959.0ms |
| default | sidecars.restart-sentinel.total | 3882.0ms | 3957.7ms |
| skipChannels | sidecars.session-locks.total | 4295.8ms | 4295.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4293.2ms | 4293.2ms |
| skipChannels | post-attach.update-sentinel.total | 4033.7ms | 4033.7ms |
| skipChannels | sidecars.restart-sentinel.total | 4032.8ms | 4032.8ms |
| skipChannels | sidecars.ready.total | 4025.6ms | 4025.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3503.1ms | 3515.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2879.8ms | 2908.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2852.4ms | 2875.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2850.9ms | 2874.2ms |
| oneInternalHook | sidecars.internal-hooks.total | 996.6ms | 1061.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3310.9ms | 3807.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2711.7ms | 3133.8ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2690.5ms | 3100.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2689.5ms | 3099.3ms |
| allInternalHooks | sidecars.internal-hooks.total | 946.8ms | 988.9ms |
| fiftyPlugins | sidecars.session-locks.total | 4801.0ms | 4808.1ms |
| fiftyPlugins | post-ready.maintenance.total | 4733.3ms | 4738.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4672.2ms | 4675.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4526.6ms | 4528.8ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4525.6ms | 4527.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4989.0ms | 5010.6ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4916.3ms | 4941.0ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4847.1ms | 4876.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4689.7ms | 4711.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4688.7ms | 4710.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11506.0ms | 0.000 | 2700.2MB | 1241.9MB | -1458.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10734.0ms | 0.186 | 1045.6MB | 1079.1MB | 33.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10605.0ms | 0.189 | 1004.2MB | 1218.9MB | 214.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 651.7ms | 741.7ms | 187.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 839.8ms | 850.9ms | 187.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 146.5ms |

## Observations

No data.

