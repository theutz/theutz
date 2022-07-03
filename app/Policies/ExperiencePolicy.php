<?php

namespace App\Policies;

use App\Models\Experience;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ExperiencePolicy
{
    use HandlesAuthorization;

    private function isMe(User $user)
    {
        return str_ends_with($user->email, '@theutz.com') && $user->hasVerifiedEmail();
    }

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return $this->isMe($user);
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Experience  $experience
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Experience $experience)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $this->isMe($user);
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Experience  $experience
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Experience $experience)
    {
        return $this->isMe($user);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Experience  $experience
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Experience $experience)
    {
        return $this->isMe($user);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Experience  $experience
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Experience $experience)
    {
        return $this->isMe($user);
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Experience  $experience
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Experience $experience)
    {
        return $this->isMe($user);
    }
}
