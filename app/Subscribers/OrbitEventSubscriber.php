<?php

namespace App\Subscribers;

use CzProject\GitPhp\Git;
use CzProject\GitPhp\GitRepository;
use Illuminate\Events\Dispatcher;
use Orbit\Events\OrbitalCreated;
use Orbit\Events\OrbitalDeleted;
use Orbit\Events\OrbitalForceDeleted;
use Orbit\Events\OrbitalUpdated;

class CommitOrbitChangesSubscriber
{
    private GitRepository $repo;

    public function __construct()
    {
        $this->repo = (new Git)->open(base_path());
    }

    public function handleCreated(OrbitalCreated $event)
    {
        $this->commit($event, 'Content Created');
        // $file = $this->getFilePathFromEvent($event);
        // $this->repo->addFile($file);
        // $this->repo->commit("[BOT] Content Created");
        // $this->pushIfLive();
    }

    public function handleUpdated(OrbitalUpdated $event)
    {
        $this->commit($event, 'Content Updated');
        // $file = $this->getFilePathFromEvent($event);
        // $this->repo->addFile($file);
        // $this->repo->commit("[BOT] Content Updated");
        // $this->pushIfLive();
    }

    public function handleDeleted(OrbitalDeleted $event)
    {
        $this->commit($event, 'Content Deleted');
        // $file = $this->getFilePathFromEvent($event);
        // $this->repo->removeFile($file);
        // $this->repo->commit("[BOT] Content Deleted");
        // $this->pushIfLive();
    }

    public function handleForceDeleted(OrbitalForceDeleted $event)
    {
        $this->commit($event, 'Content Force Deleted');
        // $file = $this->getFilePathFromEvent($event);
        // $this->repo->removeFile($file);
        // $this->repo->commit("[BOT] Content Force Deleted");
        // $this->pushIfLive();
    }

    private function commit(
        OrbitalCreated|OrbitalUpdated|OrbitalDeleted|OrbitalForceDeleted $event,
        string $message
    )
    {
        $file = $this->getFilePathFromEvent($event);
        $action = $this->getOperationType($event);
        $this->repo->$action($file);
        $this->repo->commit("[BOT] {$message}");

        if (config('app.env') == 'production' && $this->repo->getCurrentBranchName() == 'main') {
            $this->repo->push();
        }
    }

    private function getOperationType(
        OrbitalCreated|OrbitalUpdated|OrbitalDeleted|OrbitalForceDeleted $event
    ): string {
        // if ($event instanceof OrbitalCreated || $event instanceof OrbitalUpdated) {
        //     return 'addFile';
        // } elseif ($event instanceof OrbitalDeleted || $event instanceof OrbitalForceDeleted) {
        //     return 'removeFile'
        // }
        return match (get_class($event)) {
            OrbitalCreated::class, OrbitalUpdated::class => 'addFile',
            OrbitalDeleted::class, OrbitalForceDeleted::class => 'removeFile'
        };
    }

    public function subscribe()
    {
        return [
            OrbitalCreated::class => 'handleCreated',
            OrbitalUpdated::class => 'handleUpdated',
            OrbitalDeleted::class => 'handleDeleted',
            OrbitalForceDeleted::class => 'handleForceDeleted'
        ];
    }

    private static function getFilePathFromEvent(
        OrbitalCreated|OrbitalUpdated|OrbitalDeleted|OrbitalForceDeleted $event
    ): string {
        $path = $event->model->getOrbitalPath();
        $ext = $event->model->driver ?? 'md';
        $filename = "{$event->model->getKey()}.{$ext}";
        return $path . DIRECTORY_SEPARATOR . $filename;
    }
}
