# OpenClaw Source Performance

Generated: 2026-07-22T13:26:18.207Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5918.6ms | 6297.3ms | 5918.6ms | 2866.7ms | 5812.2ms | 45.8ms | 900.5MB | 1.270 |
| skipChannels | gateway, skip channels | 2820.1ms | 2853.2ms | 2819.9ms | 2740.8ms | 2786.0ms | 40.9ms | 874.4MB | 1.432 |
| oneInternalHook | gateway, one configured internal hook | 4250.2ms | 7293.5ms | 4250.1ms | 4174.4ms | 4219.2ms | 42.8ms | 946.9MB | 1.234 |
| allInternalHooks | gateway, all internal hooks | 4362.8ms | 6288.5ms | 4362.7ms | 4278.7ms | 4328.8ms | 40.6ms | 961.1MB | 1.376 |
| fiftyPlugins | gateway, 50 manifest plugins | 6912.3ms | 6915.4ms | 6912.3ms | 4011.1ms | 4084.6ms | 42.0ms | 1159.5MB | 1.302 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7577.1ms | 7700.3ms | 7577.2ms | 4269.1ms | 4365.7ms | 46.2ms | 1137.2MB | 1.320 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| teams-meetings | 512.5MB | 466.1MB | ok |
| zoom-meetings | 510.1MB | 463.7MB | ok |
| voice-call | 509.7MB | 463.3MB | ok |
| active-memory | 508.7MB | 462.2MB | ok |
| llm-task | 508.1MB | 461.7MB | ok |
| codex | 507.8MB | 461.3MB | ok |
| workboard | 507.3MB | 460.8MB | ok |
| anthropic | 505.1MB | 458.7MB | ok |
| google-meet | 503.7MB | 457.3MB | ok |
| migrate-hermes | 503.2MB | 456.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3773.8ms | 3822.8ms |
| default | post-ready.agent-runtime-plugins.total | 3765.2ms | 3801.0ms |
| default | post-attach.update-check.total | 3762.6ms | 3798.1ms |
| default | post-attach.update-sentinel.total | 3753.7ms | 3789.2ms |
| default | sidecars.restart-sentinel.total | 3752.5ms | 3788.1ms |
| skipChannels | sidecars.internal-hooks.total | 901.0ms | 924.2ms |
| skipChannels | memory.ready.rssMb | 847.3ms | 857.6ms |
| skipChannels | post-attach.update-check.total | 826.0ms | 855.1ms |
| skipChannels | ready.total | 812.1ms | 841.4ms |
| skipChannels | runtime.post-attach.total | 810.7ms | 840.0ms |
| oneInternalHook | sidecars.session-locks.total | 3784.1ms | 3784.1ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3781.6ms | 3781.6ms |
| oneInternalHook | post-attach.update-sentinel.total | 3770.7ms | 3770.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3769.5ms | 3769.5ms |
| oneInternalHook | sidecars.ready.total | 3747.2ms | 3747.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3306.8ms | 3357.2ms |
| allInternalHooks | sidecars.session-locks.total | 2862.8ms | 2862.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2860.6ms | 2860.6ms |
| allInternalHooks | post-attach.update-sentinel.total | 2851.7ms | 2851.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2850.6ms | 2850.6ms |
| fiftyPlugins | sidecars.session-locks.total | 3643.2ms | 3666.1ms |
| fiftyPlugins | post-ready.maintenance.total | 3564.5ms | 3591.2ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3550.8ms | 3578.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3331.0ms | 3373.8ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3330.1ms | 3372.9ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3888.5ms | 3888.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3809.8ms | 3812.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3796.2ms | 3798.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3539.5ms | 3581.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3538.3ms | 3580.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11248.0ms | 0.000 | 2389.8MB | 1032.2MB | -1357.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12785.0ms | 0.235 | 859.4MB | 939.7MB | 80.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11148.0ms | 0.179 | 819.0MB | 1014.5MB | 195.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3824.9ms | 4025.9ms | 60.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 827.5ms | 859.6ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 62.4ms |

## Observations

No data.

