# OpenClaw Source Performance

Generated: 2026-07-22T14:57:16.638Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6019.1ms | 6075.5ms | 6019.0ms | 2940.6ms | 5915.1ms | 44.2ms | 913.5MB | 1.317 |
| skipChannels | gateway, skip channels | 2880.3ms | 3036.7ms | 2879.9ms | 2800.3ms | 2846.9ms | 41.7ms | 873.2MB | 1.447 |
| oneInternalHook | gateway, one configured internal hook | 4082.6ms | 6545.6ms | 4082.4ms | 4004.7ms | 4052.7ms | 40.2ms | 961.8MB | 1.230 |
| allInternalHooks | gateway, all internal hooks | 6212.9ms | 6306.1ms | 6212.9ms | 4128.2ms | 4169.3ms | 40.6ms | 958.2MB | 1.288 |
| fiftyPlugins | gateway, 50 manifest plugins | 6897.9ms | 7022.6ms | 6897.8ms | 3998.0ms | 4074.9ms | 43.5ms | 1148.8MB | 1.305 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6645.1ms | 6649.6ms | 6645.1ms | 3707.0ms | 3791.3ms | 40.0ms | 1143.0MB | 1.211 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 578.1MB | 531.6MB | ok |
| teams-meetings | 516.2MB | 469.7MB | ok |
| zoom-meetings | 515.4MB | 469.0MB | ok |
| codex | 511.8MB | 465.3MB | ok |
| workboard | 511.1MB | 464.6MB | ok |
| active-memory | 510.9MB | 464.5MB | ok |
| xai | 508.2MB | 461.7MB | ok |
| google-meet | 506.6MB | 460.1MB | ok |
| voice-call | 505.6MB | 459.2MB | ok |
| anthropic | 503.8MB | 457.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3884.8ms | 3906.1ms |
| default | post-ready.agent-runtime-plugins.total | 3861.6ms | 3881.4ms |
| default | post-attach.update-check.total | 3858.7ms | 3878.3ms |
| default | post-attach.update-sentinel.total | 3849.0ms | 3869.0ms |
| default | sidecars.restart-sentinel.total | 3847.8ms | 3867.9ms |
| skipChannels | sidecars.internal-hooks.total | 923.1ms | 980.4ms |
| skipChannels | memory.ready.rssMb | 859.3ms | 861.8ms |
| skipChannels | post-attach.update-check.total | 847.3ms | 907.3ms |
| skipChannels | ready.total | 833.3ms | 892.7ms |
| skipChannels | runtime.post-attach.total | 831.9ms | 891.2ms |
| oneInternalHook | sidecars.session-locks.total | 3164.8ms | 3164.8ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3162.8ms | 3162.8ms |
| oneInternalHook | post-attach.update-sentinel.total | 3158.3ms | 3158.3ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3157.3ms | 3157.3ms |
| oneInternalHook | sidecars.ready.total | 3140.8ms | 3140.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3170.4ms | 3208.0ms |
| allInternalHooks | sidecars.session-locks.total | 2796.4ms | 2879.2ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2794.3ms | 2877.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 2787.7ms | 2872.9ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2786.7ms | 2872.0ms |
| fiftyPlugins | sidecars.session-locks.total | 3663.4ms | 3669.3ms |
| fiftyPlugins | post-ready.maintenance.total | 3588.9ms | 3594.3ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3575.6ms | 3581.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3373.2ms | 3380.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3372.1ms | 3379.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3443.2ms | 3463.4ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3371.8ms | 3387.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3359.5ms | 3372.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3165.5ms | 3168.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3164.6ms | 3167.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10513.0ms | 0.000 | 2451.9MB | 961.9MB | -1490.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9581.0ms | 0.104 | 853.7MB | 925.3MB | 71.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10333.0ms | 0.097 | 931.2MB | 980.1MB | 48.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3430.1ms | 3447.8ms | 60.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 845.8ms | 893.1ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 71.0ms |

## Observations

No data.

