# OpenClaw Source Performance

Generated: 2026-07-21T21:04:06.865Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5080.2ms | 5427.0ms | 4968.1ms | 2867.2ms | 5026.1ms | 42.6ms | 901.4MB | 1.290 |
| skipChannels | gateway, skip channels | 3087.1ms | 5123.8ms | 3086.6ms | 2880.0ms | 2938.9ms | 45.4ms | 885.5MB | 1.384 |
| oneInternalHook | gateway, one configured internal hook | 5586.8ms | 6360.2ms | 5586.7ms | 4571.1ms | 4620.0ms | 46.1ms | 959.1MB | 1.287 |
| allInternalHooks | gateway, all internal hooks | 4287.8ms | 5476.8ms | 4287.6ms | 4180.0ms | 4228.0ms | 44.4ms | 959.3MB | 1.399 |
| fiftyPlugins | gateway, 50 manifest plugins | 6268.8ms | 6306.7ms | 6268.8ms | 4126.8ms | 4204.2ms | 45.9ms | 1102.9MB | 1.283 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5975.0ms | 5976.0ms | 5974.9ms | 3741.3ms | 3829.8ms | 42.4ms | 1078.1MB | 1.339 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 580.5MB | 534.1MB | ok |
| zoom-meetings | 541.9MB | 495.4MB | ok |
| codex | 512.9MB | 466.5MB | ok |
| teams-meetings | 509.6MB | 463.1MB | ok |
| workboard | 504.8MB | 458.3MB | ok |
| google-meet | 504.3MB | 457.9MB | ok |
| migrate-hermes | 502.5MB | 456.1MB | ok |
| active-memory | 501.8MB | 455.3MB | ok |
| anthropic | 501.8MB | 455.3MB | ok |
| voice-call | 501.0MB | 454.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3027.3ms | 3230.9ms |
| default | post-ready.agent-runtime-plugins.total | 3016.8ms | 3209.1ms |
| default | post-attach.update-check.total | 3013.7ms | 3205.7ms |
| default | post-attach.update-sentinel.total | 3004.6ms | 3197.1ms |
| default | sidecars.restart-sentinel.total | 3003.4ms | 3195.9ms |
| skipChannels | sidecars.session-locks.total | 3009.3ms | 3009.3ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3007.4ms | 3007.4ms |
| skipChannels | post-attach.update-sentinel.total | 2999.8ms | 2999.8ms |
| skipChannels | sidecars.restart-sentinel.total | 2998.8ms | 2998.8ms |
| skipChannels | sidecars.ready.total | 2984.5ms | 2984.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3591.5ms | 3649.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2882.8ms | 2940.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2848.0ms | 2912.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2847.1ms | 2911.6ms |
| oneInternalHook | sidecars.session-locks.total | 2243.3ms | 2376.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3242.2ms | 3268.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2616.3ms | 2618.9ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2591.2ms | 2594.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2590.3ms | 2593.1ms |
| allInternalHooks | sidecars.session-locks.total | 1995.0ms | 1995.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3027.0ms | 3080.0ms |
| fiftyPlugins | sidecars.session-locks.total | 2928.1ms | 2998.9ms |
| fiftyPlugins | post-ready.maintenance.total | 2849.4ms | 2924.5ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 2836.2ms | 2912.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2660.3ms | 2736.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2956.3ms | 2978.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2694.6ms | 2723.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 2620.0ms | 2643.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 2607.7ms | 2629.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2439.7ms | 2450.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10040.0ms | 0.000 | 2447.1MB | 1016.4MB | -1430.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9840.0ms | 0.203 | 894.6MB | 940.3MB | 45.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9882.0ms | 0.202 | 851.2MB | 936.3MB | 85.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3698.8ms | 3895.3ms | 60.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 804.0ms | 843.3ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.0ms | 69.4ms |

## Observations

No data.

