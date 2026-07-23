# OpenClaw Source Performance

Generated: 2026-07-23T16:51:52.518Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8344.5ms | 8372.4ms | 8344.3ms | 4014.0ms | 8151.4ms | 53.2ms | 907.3MB | 1.318 |
| skipChannels | gateway, skip channels | 7017.6ms | 8262.4ms | 7036.0ms | 3449.8ms | 3498.5ms | 57.8ms | 946.8MB | 1.411 |
| oneInternalHook | gateway, one configured internal hook | 4618.1ms | 7326.5ms | 7045.5ms | 4522.7ms | 4574.9ms | 44.8ms | 979.1MB | 1.306 |
| allInternalHooks | gateway, all internal hooks | 6591.7ms | 7392.4ms | 6591.6ms | 4353.9ms | 4404.0ms | 41.3ms | 979.5MB | 1.388 |
| fiftyPlugins | gateway, 50 manifest plugins | 9619.7ms | 11064.1ms | 9619.8ms | 4510.1ms | 4593.7ms | 46.1ms | 1126.4MB | 1.265 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 10734.0ms | 10826.5ms | 10734.0ms | 4997.6ms | 5113.3ms | 53.6ms | 1142.4MB | 1.293 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 514.9MB | 468.5MB | ok |
| memory-lancedb | 513.8MB | 467.3MB | ok |
| migrate-hermes | 509.7MB | 463.3MB | ok |
| codex | 509.6MB | 463.1MB | ok |
| google-meet | 507.6MB | 461.1MB | ok |
| llm-task | 507.2MB | 460.8MB | ok |
| teams-meetings | 506.9MB | 460.4MB | ok |
| anthropic | 506.3MB | 459.8MB | ok |
| voice-call | 504.5MB | 458.0MB | ok |
| active-memory | 504.5MB | 458.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 5420.9ms | 5565.4ms |
| default | post-ready.agent-runtime-plugins.total | 5391.0ms | 5527.3ms |
| default | post-attach.update-check.total | 5386.8ms | 5520.0ms |
| default | post-attach.update-sentinel.total | 5374.3ms | 5492.4ms |
| default | sidecars.restart-sentinel.total | 5372.6ms | 5489.2ms |
| skipChannels | sidecars.session-locks.total | 4831.4ms | 5131.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4826.6ms | 5126.1ms |
| skipChannels | post-attach.update-sentinel.total | 4811.9ms | 5111.7ms |
| skipChannels | sidecars.restart-sentinel.total | 4809.9ms | 5110.0ms |
| skipChannels | sidecars.ready.total | 4782.0ms | 5076.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3528.4ms | 3790.6ms |
| oneInternalHook | sidecars.session-locks.total | 3170.6ms | 3176.3ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3168.1ms | 3173.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 3159.8ms | 3167.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3158.5ms | 3166.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3382.1ms | 3918.7ms |
| allInternalHooks | sidecars.session-locks.total | 2975.7ms | 3070.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2973.3ms | 3068.7ms |
| allInternalHooks | post-attach.update-sentinel.total | 2963.0ms | 3060.2ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2962.0ms | 3059.3ms |
| fiftyPlugins | sidecars.session-locks.total | 5954.8ms | 7442.6ms |
| fiftyPlugins | post-ready.maintenance.total | 5866.7ms | 7260.3ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5826.2ms | 7193.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5595.6ms | 6412.9ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5594.3ms | 6410.9ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 6472.3ms | 6538.7ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 6361.4ms | 6426.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 6314.7ms | 6379.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5792.7ms | 5953.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5790.9ms | 5952.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11691.0ms | 0.000 | 2421.3MB | 1052.7MB | -1368.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11511.0ms | 0.261 | 871.4MB | 941.3MB | 69.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10604.0ms | 0.189 | 872.1MB | 934.9MB | 62.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4020.6ms | 4217.0ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 989.5ms | 1085.4ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 69.4ms |

## Observations

No data.

