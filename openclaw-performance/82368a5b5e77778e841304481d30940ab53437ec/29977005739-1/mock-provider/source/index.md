# OpenClaw Source Performance

Generated: 2026-07-23T03:32:56.229Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6235.6ms | 6459.3ms | 6235.5ms | 3123.6ms | 6116.4ms | 43.1ms | 910.0MB | 1.301 |
| skipChannels | gateway, skip channels | 3050.2ms | 3115.4ms | 3049.9ms | 2968.5ms | 3016.2ms | 46.2ms | 859.9MB | 1.335 |
| oneInternalHook | gateway, one configured internal hook | 6564.0ms | 6687.8ms | 6563.8ms | 4157.9ms | 4218.1ms | 44.3ms | 966.4MB | 1.256 |
| allInternalHooks | gateway, all internal hooks | 6788.7ms | 6974.1ms | 6788.6ms | 4495.4ms | 4538.7ms | 44.7ms | 956.1MB | 1.309 |
| fiftyPlugins | gateway, 50 manifest plugins | 8246.7ms | 8458.1ms | 8246.6ms | 4186.5ms | 4267.2ms | 40.5ms | 1167.4MB | 1.242 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8426.5ms | 8490.0ms | 8426.4ms | 3888.6ms | 3973.9ms | 42.8ms | 1129.9MB | 1.225 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 512.4MB | 465.9MB | ok |
| teams-meetings | 510.9MB | 464.5MB | ok |
| active-memory | 509.9MB | 463.5MB | ok |
| llm-task | 508.9MB | 462.4MB | ok |
| codex | 507.5MB | 461.0MB | ok |
| memory-lancedb | 505.5MB | 459.0MB | ok |
| anthropic | 505.5MB | 459.0MB | ok |
| google-meet | 504.1MB | 457.6MB | ok |
| migrate-hermes | 504.1MB | 457.6MB | ok |
| voice-call | 503.8MB | 457.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3945.0ms | 3950.3ms |
| default | post-ready.agent-runtime-plugins.total | 3920.2ms | 3930.4ms |
| default | post-attach.update-check.total | 3916.7ms | 3927.9ms |
| default | post-attach.update-sentinel.total | 3907.0ms | 3919.7ms |
| default | sidecars.restart-sentinel.total | 3905.8ms | 3918.5ms |
| skipChannels | sidecars.internal-hooks.total | 902.4ms | 911.2ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 873.6ms | 913.9ms |
| skipChannels | post-attach.update-check.total | 835.8ms | 837.5ms |
| skipChannels | ready.total | 818.1ms | 820.7ms |
| skipChannels | runtime.post-attach.total | 816.7ms | 819.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3220.9ms | 3485.0ms |
| oneInternalHook | sidecars.session-locks.total | 2854.7ms | 2998.7ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2852.2ms | 2996.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 2842.8ms | 2991.3ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2841.7ms | 2989.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3462.5ms | 3557.0ms |
| allInternalHooks | sidecars.session-locks.total | 3018.4ms | 3052.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3015.9ms | 3050.1ms |
| allInternalHooks | post-attach.update-sentinel.total | 3005.9ms | 3039.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3004.7ms | 3038.0ms |
| fiftyPlugins | sidecars.session-locks.total | 4771.9ms | 5043.4ms |
| fiftyPlugins | post-ready.maintenance.total | 4678.5ms | 4945.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4642.4ms | 4906.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4448.0ms | 4683.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4447.2ms | 4682.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4989.3ms | 5085.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4889.0ms | 4986.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4851.7ms | 4947.6ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4640.7ms | 4718.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4639.7ms | 4717.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10199.0ms | 0.000 | 2489.9MB | 1059.7MB | -1430.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9746.0ms | 0.205 | 812.7MB | 1031.2MB | 218.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10239.0ms | 0.195 | 867.9MB | 939.1MB | 71.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3462.0ms | 3527.3ms | 60.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 738.8ms | 754.2ms | 60.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.1ms | 56.3ms |

## Observations

No data.

