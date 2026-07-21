# OpenClaw Source Performance

Generated: 2026-07-21T21:03:39.254Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5765.2ms | 6029.7ms | 5765.1ms | 3264.4ms | 5660.3ms | 45.4ms | 927.3MB | 1.327 |
| skipChannels | gateway, skip channels | 5855.2ms | 6425.9ms | 5720.3ms | 3238.1ms | 3288.0ms | 48.4ms | 912.1MB | 1.245 |
| oneInternalHook | gateway, one configured internal hook | 6323.2ms | 6553.9ms | 6318.2ms | 4751.5ms | 4823.8ms | 44.5ms | 948.1MB | 1.373 |
| allInternalHooks | gateway, all internal hooks | 5747.0ms | 6169.8ms | 5747.0ms | 4258.1ms | 4315.7ms | 42.3ms | 960.4MB | 1.297 |
| fiftyPlugins | gateway, 50 manifest plugins | 6721.2ms | 6855.2ms | 6721.1ms | 4367.4ms | 4449.3ms | 46.5ms | 1101.6MB | 1.339 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6578.7ms | 6798.2ms | 6583.2ms | 4211.8ms | 4298.9ms | 45.2ms | 1079.7MB | 1.324 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 510.4MB | 463.9MB | ok |
| codex | 509.3MB | 462.9MB | ok |
| teams-meetings | 507.0MB | 460.5MB | ok |
| llm-task | 505.8MB | 459.3MB | ok |
| workboard | 505.5MB | 459.1MB | ok |
| memory-lancedb | 505.0MB | 458.6MB | ok |
| zoom-meetings | 504.7MB | 458.3MB | ok |
| anthropic | 502.7MB | 456.2MB | ok |
| google-meet | 502.0MB | 455.6MB | ok |
| migrate-hermes | 500.8MB | 454.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3454.9ms | 3699.9ms |
| default | post-ready.agent-runtime-plugins.total | 3433.3ms | 3679.6ms |
| default | post-attach.update-check.total | 3429.4ms | 3677.0ms |
| default | post-attach.update-sentinel.total | 3420.4ms | 3670.0ms |
| default | sidecars.restart-sentinel.total | 3419.2ms | 3668.9ms |
| skipChannels | sidecars.session-locks.total | 3538.4ms | 3751.4ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3535.9ms | 3749.6ms |
| skipChannels | post-attach.update-sentinel.total | 3529.3ms | 3744.5ms |
| skipChannels | sidecars.restart-sentinel.total | 3527.9ms | 3743.4ms |
| skipChannels | sidecars.ready.total | 3502.2ms | 3723.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3673.0ms | 3688.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2965.4ms | 3003.1ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2932.4ms | 2976.3ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2931.4ms | 2975.4ms |
| oneInternalHook | sidecars.session-locks.total | 2299.4ms | 2511.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3271.2ms | 3521.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2657.2ms | 2853.9ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2631.3ms | 2825.2ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2630.5ms | 2824.3ms |
| allInternalHooks | sidecars.session-locks.total | 2170.5ms | 2336.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3221.7ms | 3250.7ms |
| fiftyPlugins | sidecars.session-locks.total | 3134.2ms | 3306.1ms |
| fiftyPlugins | post-ready.maintenance.total | 3046.2ms | 3216.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3031.2ms | 3201.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2835.0ms | 3001.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3268.7ms | 3376.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2985.0ms | 3170.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 2901.8ms | 3081.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 2886.6ms | 3067.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2701.2ms | 2864.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10781.0ms | 0.000 | 2519.3MB | 957.5MB | -1561.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9900.0ms | 0.202 | 853.1MB | 925.1MB | 72.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9813.0ms | 0.102 | 852.1MB | 937.5MB | 85.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3593.4ms | 3692.4ms | 60.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 795.9ms | 833.7ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.0ms | 63.2ms |

## Observations

No data.

